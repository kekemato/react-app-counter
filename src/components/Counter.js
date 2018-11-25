import React from 'react'
import Button from './Button'
import Paper from './Paper'

class Counter extends React.Component {
    state =
        JSON.parse(localStorage.getItem('counter-state'))
        ||
        {
            number: 0
        }

    componentDidUpdate() {
        this.saveInLocalStorage()
    }

    saveInLocalStorage = () => localStorage.setItem(
        'counter-state',
        JSON.stringify(this.state))

    incHandler = () => this.setState({ number: this.state.number + 1 })
    decHandler = () => this.setState({ number: this.state.number - 1 })
    incByFiveHandler = () => this.setState({ number: this.state.number + 5 })
    decByFiveHandler = () => this.setState({ number: this.state.number - 5 })
    resetCounter = () => this.setState({ number: 0 })

    render() {
        return (
            <Paper>
                <h1>
                    {this.state.number}
                </h1>
                <Button
                    onClick={this.incHandler}
                    label={"+"}
                >
                </Button>
                <Button
                    onClick={this.incByFiveHandler}
                    label={"+5"}
                >
                </Button>
                <Button
                    onClick={this.decHandler}
                    label={"-"}
                >
                </Button>
                <Button
                    onClick={this.decByFiveHandler}
                    label={"-5"}
                >
                </Button>
                <Button
                    onClick={this.resetCounter}
                    label={"reset"}
                >
                </Button>
            </Paper>
        )
    }
}

export default Counter