import React, { Fragment } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = ({ match: { params } }) => (
    <Fragment>
        <Navbar />
        <div className="container">
            <div className="card shadow-sm mt-5">
                <div className="card-header py-3">
                    <AddTodo />
                </div>
                <div className="card-body">
                    <VisibleTodoList filter={params.filter || 'SHOW_ALL'} />
                </div>
                <div className="card-footer">
                    <Footer />
                </div>
            </div>
        </div>
    </Fragment>
)

export default App