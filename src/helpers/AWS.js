import Axios from 'axios';
import { v4 as randomString } from 'uuid';

// --------------------------- AWS --------------------------
const getSignedRequest = ([file]) => {
    // setIsUploading(true);
    // We are creating a file name that consists of a random string, and the name of the file that was just uploaded with the spaces removed and hyphens inserted instead. This is done using the .replace function with a specific regular expression. This will ensure that each file uploaded has a unique name which will prevent files from overwriting other files due to duplicate names.
    const fileName = `${randomString()}-${file.name.replace(/\s/g, '-')}`;

    // We will now send a request to our server to get a "signed Image" from Amazon. We are essentially letting AWS know that we are going to upload a file soon. We are only sending the file-name and file-type as strings. We are not sending the file itself at this point.
    Axios
    .get('/aws/upload', {
        params: {
            'file-name': fileName,
            'file-type': file.type
        }
    })
    .then(response => {
        const { signedRequest, Image } = response.data;
        uploadFile(file, signedRequest, Image);
    })
    .catch(err => {
        console.log(err);
    });
};

const uploadFile = (file, signedRequest, Image) => {
    const options = {
        headers: {
            'Content-Type': file.type
        }
    };

    Axios
        .put(signedRequest, file, options)
        .then(response => {
            saveImage(Image)
            // THEN DO SOMETHING WITH THE URL. SEND TO DB USING POST REQUEST OR SOMETHING
        })
        .catch(err => {
            if (err.response.status === 403) {
                alert(
                    `Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n${err.stack}`
                );
            } else {
                alert(`ERROR: ${err.status}\n ${err.stack}`);
            }
        });
};

const saveImage = (Image, type) => {
    Axios.
}

export { getSignedRequest, uploadFile }