import { Formik, Field, ErrorMessage } from 'formik';
import { useState } from 'react';

import { messages } from '../constants';
import { naturalToRoman } from '../utils';

const { msgRequiredInteger, msgRequiredPosInteger } = messages;

export const testIds = {
  naturalInput: 'natural-input-field',
  submit: 'submit-button',
  result: 'result-text',
};

interface FormValues {
  natural: string;
}

const initialValues: FormValues = {
  natural: '',
};

const Home = () => {
  const [romanNumber, setRomanNumber] = useState<string | null>(null);

  const handleFormSubmit = (values: FormValues) => {
    const natural = parseInt(values.natural, 10);
    const converted = naturalToRoman(natural);

    setRomanNumber(converted);
  };

  const validateNaturalFIeld = (value: string) => {
    let error;

    const natural = parseInt(value, 10);

    if (!natural) {
      error = messages.msgRequiredInteger;
    } else if (natural <= 0) {
      error = messages.msgRequiredPosInteger;
    }

    return error;
  };

  return (
    <div className="h-full bg-indigo-800">
      {/* Container */}
      <div className="max-w-full h-full px-4">
        {/* Row */}
        <div className="flex flex-wrap h-full justify-center">
          {/* Col */}
          <div className="flex flex-row items-center xl:w-4/12 lg:w-6/12 sm:w-8/12 w-full">
            <div className="w-full">
              <h1 className="mb-12 text-white text-center">
                Roman Number Calculator
              </h1>

              {/* Main Section */}
              <main className="bg-white rounded-lg p-4">
                <Formik
                  enableReinitialize
                  initialValues={initialValues}
                  onSubmit={handleFormSubmit}
                >
                  {({ handleSubmit, errors }) => (
                    <form onSubmit={handleSubmit}>
                      {/* Input Field */}
                      <div className="md:p-4">
                        <label
                          htmlFor="natural"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Enter natural number:
                        </label>
                        <Field
                          name="natural"
                          validate={validateNaturalFIeld}
                          placeholder="Ex: 123"
                          data-testid={testIds.naturalInput}
                          className="placeholder-gray-400 leading-6 w-full px-3 py-2
                          border border-gray-300 rounded-md shadow-sm
                          transition ease-in-out duration-100
                          focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none
                          focus:ring-1 focus:ring-offset-0"
                          autoFocus
                        />
                        <ErrorMessage
                          name="natural"
                          render={(msg) => (
                            <div className="block text-red-500">{msg}</div>
                          )}
                        />
                      </div>
                      {/* End Input Field */}

                      {/* Button */}
                      <div className="md:p-4">
                        <button
                          type="submit"
                          disabled={!!errors.natural}
                          data-testid={testIds.submit}
                          className="border border-transparent rounded text-white ring-gray-200 m-0.5 px-2.5 py-1.5
                          transition-all ease-in duration-75 hover:bg-gray-100 hover:shadow-sm
                          focus:outline-none focus:ring-2 focus:ring-offset-2
                          bg-indigo-500 text-white ring-indigo-500 hover:bg-indigo-600 w-full disabled:opacity-50"
                        >
                          Convert
                        </button>
                      </div>
                      {/* End Button */}
                    </form>
                  )}
                </Formik>

                <div className="md:p-4">
                  Result:{' '}
                  <span className="font-bold">{romanNumber || 'N/A'}</span>
                </div>
              </main>
              {/* End Section */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
      {/* End Container */}
    </div>
  );
};

export default Home;
