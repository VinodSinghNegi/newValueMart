import React from "react";

import styled from "@emotion/styled";

import Select from "react-dropdown-select";

import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

export class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            options: [
                {
                    "id": 1,
                    "name": "Aaaaaa"
                },
                {
                    "id": 2,
                    "name": "Bbbbbb"

                },
                {
                    "id": 3,
                    "name": "Cccccc"

                },
                {
                    "id": 4,
                    "name": "Dddddd"
                }
            ],
            multi: true,
            searchBy: "name",
            searchable: true,
            handle: true,
            labelField: "name",
            valueField: "name",
            color: "orange",
            keepSelectedInList: true,
            dropdownPosition: "bottom",
            direction: "ltr",
            dropdownHeight: "300px"
        };
    }


    render() {
        return (
            <MDBContainer >
                <MDBRow >
                    <MDBCol >
                        <div className="h5 text-center blue-text py-4">Pick items</div>
                        <br />
                        <div>
                            <div>
                                <div style={{ maxWidth: "350px", margin: "0 auto" }}>
                                    <StyledSelect
                                        placeholder="Pick items"
                                        color={this.state.color}
                                        searchBy={this.state.searchBy}
                                        searchable={this.state.searchable}
                                        dropdownHandle={this.state.handle}
                                        dropdownHeight={this.state.dropdownHeight}
                                        direction={this.state.direction}
                                        multi={this.state.multi}
                                        labelField={this.state.labelField}
                                        valueField={this.state.valueField}
                                        options={this.state.options}
                                        dropdownGap={5}
                                        keepSelectedInList={this.state.keepSelectedInList}
                                        onChange={values => this.props.giveItemList(values)}
                                        noDataLabel="No matches found"
                                    />
                                </div>
                            </div>
                            <p>&nbsp;</p>

                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

const StyledSelect = styled(Select)`${({ dropdownRenderer }) => dropdownRenderer && `.react-dropdown-select-dropdown {
			overflow: initial;
        }`
    }`

export default App
