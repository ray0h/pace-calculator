import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

const BasicDist = () => {
  const [ miles, setMiles ] = useState('');
  const [ km, setKm ] = useState('');
  const [ units, setUnits ] = useState('mi');

  const onSubmit = (values) => {
    console.log(values.units)
    let dist = (values.units == 'mph' || values.units == 'kph') ? Number(parseSec(values.time)/3600*values.pace).toFixed(2) : Number(parseSec(values.time) / parseSec(values.pace)).toFixed(2);
    console.log(dist)
    if (values.units == 'mi' || values.units == 'mph') {
      setMiles(dist);
      setKm(Number(dist*1.6).toFixed(2));
    } else {
      setKm(dist);
      setMiles(Number(dist/1.6).toFixed(2));
    }
    console.log(values)
  };

  const parseSec = (time) => {
    let digits = time.split(":").map(d => parseInt(d));
    while (digits.length < 3) { digits.unshift(0) } 
    return 3600*digits[0] + 60*digits[1] + digits[2];
  };

  const onchange = (e) => {
    setUnits(e.target.value)
    console.log(e.target)
  };

  return (
    <div>
      <h3>Distance Calculator</h3>
      <Formik
        initialValues={{time: '', pace: '', units: 'mi'}}
        onSubmit={onSubmit}
      >
        {({handleChange}) => (
          <Form>
    
          Enter the time:
          <Field placeholder='hh:mm:ss' name="time"/><br/>
          Enter pace:
          <Field name="units" as="select" onChange={(e) => {
            onchange(e);
            handleChange(e);
          }}>
            <option value="mi">per mi</option>
            <option value="km">per km</option>
            <option value="mph">MPH</option>
            <option value="kph" label="KPH" />
          </Field>
          <Field name="pace"/>
          {units == 'mi' || units == 'km' ? 'hh:mm:ss' : ''}<br/>
          <button type="submit">Calculate Distance</button>
        </Form>
        )}
      </Formik>
      {miles ? 'Distance Covered at given time & pace:' : ''}<br/>
      {miles ? `${miles} miles` : ''}<br/>
      {km ? `${km} kilometers` : ''}
    </div>
  );
};

export default BasicDist;