import React from 'react'

class Counter extends React.Component {
    state = {
        number: this.props.startNumber || 0
    }

    incHandler = () => this.setState({ number: this.state.number + 1 })
    decHandler = () => this.setState({ number: this.state.number - 1 })
    incByFiveHandler = () => this.setState({ number: this.state.number + 5 })
    decByFiveHandler = () => this.setState({ number: this.state.number - 5 })
    resetCounter = () => this.setState({ number: this.props.startNumber || 0 })

    render() {
        return (
            <div>
                <h1>
                    {this.state.number}
                </h1>
                <button
                    onClick={this.incHandler}
                >
                    +
                </button>
                <button
                    onClick={this.incByFiveHandler}
                >
                    +5
                </button>
                <button
                    onClick={this.decHandler}
                >
                    -
                </button>
                <button
                    onClick={this.decByFiveHandler}
                >
                    -5
                </button>
                <button
                    onClick={this.resetCounter}
                >
                    reset
                </button>
            </div>
        )
    }
}

export default Counter