import React, { useCallback, useState } from 'react';

import {useDropzone} from 'react-dropzone'

import { Container } from './style';
import {MdOutlineFileUpload} from "react-icons/md";

interface Props {
    onImageUploaded: (file: File) => void;
}
const Dropzone: React.FC<Props> = ({onImageUploaded}) => {
    const [selectedImgaeUrl, SetselectedImgaeUrl] = useState('');

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        const image = acceptedFiles[0];
        const imageUrl = URL.createObjectURL(image);

        SetselectedImgaeUrl(imageUrl);

        onImageUploaded(image)

        //console.log(acceptedFiles) 
      }, [onImageUploaded])
      const {getRootProps, getInputProps} = useDropzone({
            onDrop,
            accept: 'image/*'
        })
    
      return (
        <Container {...getRootProps()}>
            <input {...getInputProps()}  accept="image/*" />
            {
                selectedImgaeUrl ? <img src={selectedImgaeUrl} alt="Book Image" />:
                <p>
                    <MdOutlineFileUpload />
                    Arraste e solte alguns arquivos aqui ou clique para selecionar os arquivos
                </p>
            }
        </Container>
      )
}

export default Dropzone;