import React from "react";
import { Formik, Form, Field } from "formik";
import { useState } from "react";

function ProductDetailForm() {
  const field_style =
    "bg-gray-200 outline-none flex-1 w-[30rem] h-10 my-2 p-2";

  const [file, setfile] = useState(null);

  return (
    <>
      <Formik
        initialValues={{
          productName: "",
          price: "",
          productPic: "",
          productDetails: "",
        }}
        onSubmit={async (values) => {
          // Set the file here before making the API call
          setfile(values.productPic);
          
          const formData = new FormData();

          Object.entries(values).map((item) => {
            formData.append(item[0], item[1]);
          });

          try {
            const requestOptions = {
              method: "POST",
              body: formData,
            };
            await fetch(
              "http://localhost:3002/addNewProducts",
              requestOptions
            );
          } catch (err) {
            alert("Enter Information");
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className=" h-auto border-black-1 text-center relative top-7">
            <h2 className=" text-2xl font-bold">Product</h2>

            <div className=" relative top-14 left-5">
              <div>
                <Field
                  name="productName"
                  placeholder="Product Name"
                  type="text"
                  className={field_style}
                />
                {errors.productName && touched.productName ? (
                  <div>{errors.productName}</div>
                ) : null}
              </div>
              <div className=" ">
                <Field
                  name="price"
                  placeholder="Price"
                  type="text"
                  className={field_style}
                />
                {errors.price && touched.price ? (
                  <div>{errors.price}</div>
                ) : null}
              </div>
              <div className=" ">
                <Field
                  name="productPic"
                  type="file"
                  className={field_style}
                  onChange={(e) => {
                    // Set the file in the form values
                    setfile(e.target.files[0]);
                  }}
                />
              </div>

              <div className=" ">
                <Field
                  name="productDetails"
                  placeholder="Enter your product details"
                  type="textArea"
                  className={field_style}
                />
                {errors.email && touched.email ? (
                  <div>{errors.password}</div>
                ) : null}
              </div>

              <button
                type="submit"
                className=" bg-black text-white p-3 rounded-xl hover:bg-gray-700 my-2"
              >
                Add product
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default ProductDetailForm;
