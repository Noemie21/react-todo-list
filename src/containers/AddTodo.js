import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
    let input

    return (

        <form onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
                return
            }
            dispatch(addTodo(input.value))
            input.value = ''
        }}>
            <div className="input-group">
                <input type="text" className="form-control form-control-lg" ref={node => { input = node }} />
                <div className="input-group-append">
                    <button type="submit" className="btn btn-lg btn-primary">Add Todo</button>
                </div>
            </div>
        </form>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo