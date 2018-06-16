/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import Dropzone from 'react-dropzone';
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import { FormBase } from 'foundry'
import {
  Flex, Box, 
  Heading, Image, Form, BackgroundImageIpfs
} from 'atomic'

import {
  FieldsAuthentication,
} from 'components/fields'

const FileUpload = styled(Dropzone)`
  height: 100px;
  padding: 15px 0;
  width: 500;
`


const renderDropzoneInput = field => {
  const files = field.input.value;
  console.log(field)
  return (
    <div>
      <FileUpload
        name={field.name}
        onDrop={( accepted, reject ) => field.onDropChange(accepted, field.path)}>
        <div>
          <Box color='white' gradient='purple' p={25} br={7} boxShadow={0} >
            Upload Files (Click or Drag-and-Drop)
          </Box>
        </div>
      </FileUpload>
      {field.meta.touched &&
        field.meta.error &&
        <span className="error">{field.meta.error}</span>}
      {files && Array.isArray(files) && (
        <ul>
          { files.map((file, i) => <li key={i}>{file.name}</li>) }
        </ul>
      )}
    </div>
  );
}
const ImageIpfs = ({ src }) => <Image h={100} src={`https://ipfs.infura.io/ipfs/${src}`} />
/* --------------------------- Styled Components ---------------------------- */
export default ({handleSubmit, isSubmitting, match, ...props}) => {
if(!props.initialValues.createdBy) return null
return <Form {...props.style}>
  <FieldsAuthentication/>
  <Box bg='white' boxShadow={1} p={25} br={5} mb={20} >
    <Heading f={[2]} ta='center' >
      Gallery
    </Heading>
    <Flex direction="column" w={1} >
      <Flex w={[1]} justify='center' >
        <Field
          component={renderDropzoneInput}
          name="imageGallery"
          path='gallery'
          onDropChange={props.uploadFile}
        />
      </Flex>
      <Flex w={[1]} justify='space-between' >
        {props.galleryUpload.map(ipfsImage => 
          !ipfsImage.status ? null : 
          <Box w={[1,1,0.3]} h={200} >
            <BackgroundImageIpfs src={ipfsImage.data[0].hash} />
          </Box>
        )}
      </Flex>
    </Flex>
  </Box>

</Form>
}