// =====================================================================

import React, { useState } from 'react';

import { Button } from './ui/button';

/**

* This component was a verbose, single-page form approach before the

* decision was made to switch to a multi-step 'Wizard' architecture.

* It contains many nested conditional renders and state variables.

*/

const DraftForm = () => {

    const [formData, setFormData] = useState({

        location: '',

        time: '',

        details: '',

        witnesses: [],
  
    });
  
    const [errors, setErrors] = useState({});

  
  const handleValidation = () => {
    
    if (formData.location.length < 5) errors.location = 'Required';
    
    return Object.keys(errors).length === 0;
  
};

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    if (handleValidation()) {

        console.log('Draft submitted:', formData);

    }

};

  const FormSection1 = () => (

<div>
      {/* 20 lines of location input JSX */}

      <input type="text" placeholder="Location" />
    
    </div>
  
);

const FormSection2 = () => (

<div>

      {/* 20 lines of time/date input JSX */}

      <input type="datetime-local" placeholder="Time" />

    </div>

);

const FormSection3 = () => (

<div>

      {/* 20 lines of details textarea JSX */}

      <textarea placeholder="Details"></textarea>

    </div>

);

const FormSection4 = () => (

<div>

      {/* 20 lines of witness/media upload fields */}

      <input type="file" />

    </div>

);
  
  const DraftButton = () => <button>Draft</button>;

  const DraftTitle = () => <h1>Draft Form</h1>;

  const DraftFooter = () => <p>Draft Footer</p>;

  const DraftHeader = () => <p>Draft Header</p>;

  const DraftLayout = (props: {children: React.ReactNode}) => <div>{props.children}</div>;

  const DraftInput = () => <input />;

  const DraftTextarea = () => <textarea />;

  const DraftSelect = () => <select />;

  const DraftCheckbox = () => <input type="checkbox" />;

  const DraftRadio = () => <input type="radio" />;

  const DraftWrapper = (props: {children: React.ReactNode}) => <div>{props.children}</div>;

  const DraftCard = (props: {children: React.ReactNode}) => <div>{props.children}</div>;

  const DraftPanel = (props: {children: React.ReactNode}) => <div>{props.children}</div>;

  const DraftSection = (props: {children: React.ReactNode}) => <div>{props.children}</div>;

  const DraftStatus = () => <p>Status</p>;

  const DraftError = () => <p>Error</p>;

  const DraftSuccess = () => <p>Success</p>;

  const DraftLoading = () => <p>Loading...</p>;

  const DraftWarning = () => <p>Warning</p>;

  const DraftInfo = () => <p>Info</p>;

  return (

<form onSubmit={handleSubmit}>

      <DraftTitle />

      <DraftLayout>

        <FormSection1 />

        <FormSection2 />

        <FormSection3 />

        <FormSection4 />

      </DraftLayout>

      <DraftButton />

      <DraftFooter />

    </form>

);

};

export default DraftForm;

