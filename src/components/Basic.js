import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

const Basic = () => {
  const [pace, setPace] = useState('');

  const parseSec = (time) => {
    let digits = time.split(":").map(d => parseInt(d));
    return 3600*digits[0] + 60*digits[1] + digits[2];
  };

  const calcPace = (time, miles) => {
    // assume time is string in "hh:mm:ss" format - will validate eventually
    let rawPace = parseSec(time)/miles/60;
    console.log(parseSec(time)/miles)
    let minutes = parseInt(rawPace);
    let seconds = Math.round((rawPace-minutes)*60);
    let str = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${str}`;
  }

  const onSubmit = (values) => {
    setPace(calcPace(values.time, values.miles))
    console.log(values)
  };

  return (
    <div>
      <Formik
        initialValues={{time: '', miles: 0}}
        onSubmit={onSubmit}
      >
        <Form>
          Enter the time:
          <Field placeholder='hh:mm:ss' name="time"/>
          Enter the miles:
          <Field name="miles"/>

          <button type="submit">Calculate Pace</button>
        </Form>
      </Formik>
  
      {pace ? `${pace} min/mile` : ''}
    </div>
  );
};

export default Basic;