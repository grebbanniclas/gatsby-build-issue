import React from "react"

const Template = ({ pageContext }) => (
    <pre>{JSON.stringify(pageContext, 2)}</pre>
);

export default Template
