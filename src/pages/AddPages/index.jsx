import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.scss";
import { SearchContext } from "../../context/searchContext";
import { Helmet } from "react-helmet-async";

function AddPages() {
  const [table, setTable] = useState([]);
  const { handleSearch, search } = useContext(SearchContext);
  const navigate = useNavigate();

  useEffect(() => {
    getAll();
  }, []);

  function handleAdd(val) {
    fetch("http://localhost:3000/", {
      method: "POST",
      body: JSON.stringify(val),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    navigate("/");
  }

  function getAll() {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setTable(data));
  }

  function Delete(id) {
    fetch("http://localhost:3000/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        getAll();
      });
  }
  return (
    <div className="addPages">
      <Helmet>
        <title>Add Pages</title>
      </Helmet>
      <Formik
        initialValues={{ image: "", name: "", desc: "" }}
        validationSchema={Yup.object({
          image: Yup.string().required("Required"),
          name: Yup.string().required("Required"),
          desc: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleAdd(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="image">Image</label>
          <Field name="image" type="text" />
          <ErrorMessage name="image" />

          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <label htmlFor="desc">Description</label>
          <Field name="desc" type="desc" />
          <ErrorMessage name="desc" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <input
        className="input"
        type="text"
        placeholder="Search Product"
        onChange={(e) => handleSearch(e)}
      />
      {table
        .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
        .map((x) => (
          <table>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Delete</th>
            </tr>
            <tr>
              <td>
                <img src={x.image} alt="" />
              </td>
              <td>{x.name}</td>
              <td>{x.desc}</td>
              <td>
                <i class="fa-solid fa-trash"></i>
              </td>
            </tr>
          </table>
        ))}
    </div>
  );
}

export default AddPages;
