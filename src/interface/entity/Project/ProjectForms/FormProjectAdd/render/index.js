/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
// import idx from './idx'
import { Field } from 'redux-form'
import Dropzone from 'react-dropzone';
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import { FormBase } from 'foundry'
import {
  Flex, Box, 
  Heading, Image, Paragraph, Link, Span, Button,
  BackgroundImage, BackgroundGradient, ReduxField, Form
} from 'atomic'

import {
  FieldsAuthentication,
  FieldsContact,
  FieldsTaxonomy,
} from 'components/fields'

import StyleFormDefault from 'static/style/StyleFormDefault'

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
return <Form {...props}
  bg='white'
  color='charcoal'
  p={10} >
  <FieldsAuthentication/>
  <Heading level={[3]} f={[3]} mb={[10]} >
    Project
  </Heading>
  <Field 
    name="entityName"
    placeholder="Project Name"
    component={ReduxField}
    type="text"
    color='blue'
    mh={50}
    f={[4]}
    fw='700'
    {...StyleFormDefault}
  />
  <Field 
    name="entityTagline"
    placeholder="Project Tagline"
    component={ReduxField}
    type="text"
    color='blue'
    mh={35}
    f={[4]}
    fw='700'
    {...StyleFormDefault}
  />
  <Field 
    name="entityDescription"
    placeholder="Project Description"
    component={ReduxField}
    type="textarea"
    color='blue'
    {...StyleFormDefault}
  />

  <Box bg="grayLight" boxShadow={1} p={25} br={5} mb={20} mt={20} >
    <Heading f={[2]} ta='center' >
      Logo
    </Heading>
    <Flex direction="column" w={1} >
      <Flex w={[1]} justify='center' >
        <Field
          component={renderDropzoneInput}
          name="imageLogo"
          path='logo'
          onDropChange={props.uploadFile}
        />
      </Flex>
      <Flex w={[1]} >
        {props.galleryUpload.map(ipfsImage => 
          !ipfsImage.status ? null : <ImageIpfs src={ipfsImage.data[0].hash} />
        )}
      </Flex>
    </Flex>
  </Box>

  <Box bg="grayLight" boxShadow={1} p={25} br={5} mb={20} >
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
      <Flex w={[1]} >
        {props.galleryUpload.map(ipfsImage => 
          !ipfsImage.status ? null : <ImageIpfs src={ipfsImage.data[0].hash} />
        )}
      </Flex>
    </Flex>
  </Box>

  {/* <Heading level={[3]} f={[3]} mb={[10]} >
    Details
  </Heading>
  <FieldsContact {...StyleFormDefault}/>
  <Field 
    component={ReduxField}
    name="contactWebsite"
    placeholder="Website"
    type="text"
    {...StyleFormDefault}
    />
  <Field 
    component={ReduxField}
    name="contactTwitter"
    placeholder="Twitter"
    type="text"
    {...StyleFormDefault}
    />
  <Field 
    component={ReduxField}
    name="contactGithub"
    placeholder="Github" 
    type="text"
    {...StyleFormDefault}
    />
  <Heading level={[3]} f={[3]} mt={[10]}>
    Taxonomy
  </Heading>
  <FieldsTaxonomy/>
   */}
  <Button type="submit" onClick={handleSubmit} gradient='cherry' mt={[10,15]} w={1} >Add New Project</Button>
</Form>
}