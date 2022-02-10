import React, { Component } from "react";
import ChildCompo from "./ChildCompo";

export default class ParentCompo extends Component {
  render() {
    return <ChildCompo name="Child Component" />;
  }
}
