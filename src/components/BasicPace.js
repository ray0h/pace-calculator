import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

const BasicPace = () => {
  const [paceMiMin, setPaceMiMin] = useState('');
  const [paceKmMin, setPaceKmMin] = useState('');
  const [paceMPH, setPaceMPH] = useState('');
  const [paceKPH, setPaceKPH] = useState('');

  const parseSec = (time) => {
    let digits = time.split(":").map(d => parseInt(d));
    return 3600*digits[0] + 60*digits[1] + digits[2];
  };

  const calcPace = (time, dist) => {
    // assume time is string in "hh:mm:ss" format - will validate eventually
    let rawPace = parseSec(time)/dist/60;
    let minutes = parseInt(rawPace);
    let seconds = Math.round((rawPace-minutes)*60);
    let str = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${str}`;
  }

  const calcPHPace = (pace) => {
    let [min, sec] = pace.split(':')
    return Number(60/(parseInt(min)+(sec/60))).toFixed(2);
  }

  const onSubmit = (values) => {
    let kmMin, miMin;
    if (values.units === 'mi') {
      miMin = calcPace(values.time, values.distance);
      kmMin = calcPace(values.time, values.distance*1.6);
    } else {
      kmMin = calcPace(values.time, values.distance);
      miMin = calcPace(values.time, values.distance/1.6);
    };
    setPaceMiMin(miMin);
    setPaceKmMin(kmMin);
    setPaceMPH(calcPHPace(miMin));
    setPaceKPH(calcPHPace(kmMin));
    console.log(values)
  };

  return (
    <div>
      <Formik
        initialValues={{time: '', distance: 0, units: 'mi'}}
        onSubmit={onSubmit}
      >
        <Form>
          Enter the time:
          <Field placeholder='hh:mm:ss' name="time"/>
          Enter distance (km/mi):
          <Field name="distance"/>
          <Field name="units" as="select">
            <option value="mi">mi</option>
            <option value="km">km</option>
          </Field>
          <button type="submit">Calculate Pace</button>
        </Form>
      </Formik>
  
      {paceMiMin ? `${paceMiMin} min/mile` : ''}<br/>
      {paceKmMin ? `${paceKmMin} min/km` : ''}<br/>
      {paceMPH ? `${paceMPH} miles/hr` : ''}<br/>
      {paceKPH ? `${paceKPH} km/hr` : ''}<br/>
    </div>
  );
};

export default BasicPace;