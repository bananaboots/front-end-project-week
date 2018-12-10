import React, { Component } from 'react';
import styled from 'styled-components';

const FormDiv = styled.div`
    border: 1px solid gray;
    background-color: #F2F1F2;
    width: 685px;
    max-height: 100%;
`

const Form = styled.form`
    background-color: #F2F1F2;
    margin: 5.6rem 2.6rem;
    display: flex;
    flex-direction: column;
`

const FormTitle = styled.h1`
    font-size: 2.1rem;
    font-weight: 700;
    margin-bottom: 3.2rem;
`

const Input = styled.input`
    padding: 1rem;
    width: 35rem;
    height: 4.2rem;
    border: 2px solid lightgray;
    border-radius: 4px;
    vertical-align: text-top;
    &:focus {
        outline: none;
    }
`

const InputTwo = styled.textarea`
    margin: 2rem 0;
    padding: 1rem;
    width: 60rem;
    height: 35rem;
    text-align: top-left;
    white-space: pre-wrap;
    border: 2px solid lightgray;
    border-radius: 4px;
    vertical-align: text-top;
    &:focus {
        outline: none;
    }
`

const InputThree = styled.input`
    padding: 1rem;
    width: 60rem;
    height: 4.2rem;
    border: 2px solid lightgray;
    border-radius: 4px;
    vertical-align: text-top;
    &:focus {
        outline: none;
    }
`

const Button = styled.button`
    width: 190px;
    height: 4.3rem;
    background-color: #25B7BD;
    margin-top: 2.5rem;
    color: #FFF;
    font-size: 1.5rem;
    font-weight: bold;
    &:hover {
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
`

export default class NewNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: '',
            tagInput: '',
            tags: []
        }
    }

    changeHandler = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        }, () => 
            this.setState({
                ...this.state,
                tags: this.state.tagInput.split(' ')
            })
        )
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.addNote(this.state);
        this.setState({
            title: '',
            textBody: '',
            tagInput: '',
            tags: []
        });
        this.props.history.push('/');
    }

    render() {
        return (
            <FormDiv>
                <Form onSubmit={this.submitHandler}>
                    <FormTitle>Create New Note:</FormTitle>
                    <Input 
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.changeHandler}
                        placeholder="Title"
                    />
                    <InputTwo
                        type="text"
                        name="textBody"
                        value={this.state.textBody}
                        onChange={this.changeHandler}
                        placeholder="Note"
                    />
                    <InputThree
                        type="text"
                        name="tagInput"
                        value={this.state.tagInput}
                        onChange={this.changeHandler}
                        placeholder="Tags"
                    />
                    <Button type="submit">Save</Button>
                </Form>            
            </FormDiv>
        );
    }

}