import React, { useState } from "react";
import "../../style/UserAuth/Login.sass";
import Axios from "axios";

// AWS
import Dropzone from 'react-dropzone'
import { v4 as randomString } from 'uuid';
import user_placeholder from "../../img/user_placeholder.svg";

const Signup = ({ changeHandler }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("")
  const [profileImage, setProfileImage] = useState(user_placeholder);

  const register = () => {
    Axios.post("/api/register", {
      email,
      password,
      firstName,
      lastName,
      profileImage
    })
      .then((res) => {
        console.log(res);
        changeHandler();
      })
      .catch((err) => console.log(err));
  };

  const onChangeHandler =(value, type)=> {
    switch(type){
      case 'firstName':
        return setFirstName(value)
      case 'lastName': 
        return setLastName(value)
      case 'email':
        return setEmail(value)
      case 'password':
        return setPassword(value)
    }
  }

  const inputs = [
    {
      id: 1,
      placeholder: "Firstname",
      icon: "fas fa-user",
      type: "firstName"
    },
    {
      id: 2,
      placeholder: "Lastname",
      icon: "fas fa-user",
      type: "lastName"
    },
    {
      id: 3,
      placeholder: "Email",
      icon: "fas fa-envelope",
      type: "email"
    },
    {
      id: 4,
      placeholder: 'Password',
      icon: "fas fa-unlock-alt",
      type: 'password'
    }
  ].map(input => (
    <div key={input.id} className="input-box">
        <i className={input.icon}></i>
        <input
          type="text"
          placeholder={input.placeholder}
          onChange={(e)=> onChangeHandler(e.target.value, input.type)}
        />
      </div>
  ));

  // --------------------------- AWS --------------------------
  const getSignedRequest = ([file]) => {
		// setIsUploading(true);
		// We are creating a file name that consists of a random string, and the name of the file that was just uploaded with the spaces removed and hyphens inserted instead. This is done using the .replace function with a specific regular expression. This will ensure that each file uploaded has a unique name which will prevent files from overwriting other files due to duplicate names.
		const fileName = `${randomString()}-${file.name.replace(/\s/g, '-')}`;

		// We will now send a request to our server to get a "signed profileimage" from Amazon. We are essentially letting AWS know that we are going to upload a file soon. We are only sending the file-name and file-type as strings. We are not sending the file itself at this point.
		Axios
			.get('/aws/upload', {
				params: {
					'file-name': fileName,
					'file-type': file.type
				}
			})
			.then(response => {
				const { signedRequest, profileimage } = response.data;
				uploadFile(file, signedRequest, profileimage);
			})
			.catch(err => {
				console.log(err);
			});
	};

	const uploadFile = (file, signedRequest, profileimage) => {
		const options = {
			headers: {
				'Content-Type': file.type
			}
		};

		Axios
			.put(signedRequest, file, options)
			.then(response => {
				// setIsUploading(false);
				setProfileImage(profileimage);
				// THEN DO SOMETHING WITH THE URL. SEND TO DB USING POST REQUEST OR SOMETHING
			})
			.catch(err => {
				// setIsUploading(false);
				if (err.response.status === 403) {
					alert(
						`Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n${err.stack}`
					);
				} else {
					alert(`ERROR: ${err.status}\n ${err.stack}`);
				}
			});
	};

  return (
    <div className="Login">
      <h1 className="Signup-title">Sign up</h1>
      <div className="user-pic-container">
        <img className='profile-img' src={profileImage} alt='' />
        <Dropzone
          onDropAccepted={getSignedRequest}
          accept='image/*'
          multiple={false}
          className='test'
        >
          {({ getRootProps, getInputProps }) => (
            <div className='container'>
              <div
                {...getRootProps({
                  className: 'dropzone',
                  onDrop: event => event.stopPropagation()
                })}
              >
                <input {...getInputProps()} />
                <div className='camera-container'>
                  <i className='fas fa-camera'></i>
                </div>
              </div>
            </div>
          )}
        </Dropzone>
      </div>
      {inputs}
      <button className="primary-btn" onClick={() => register()}>
        Register
      </button>
    </div>
  );
};

export default Signup;
