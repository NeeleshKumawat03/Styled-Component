import './App.css'
import styled from 'styled-components'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {Component} from 'react'

const MAINDIV = styled.div`
    background-color: #25262c;
    width: 100vw;
    height: 100vh;
    padding: 4rem 2rem;
`
const InternalDiv = styled.div`
    background-color: #1b1c22;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Button = styled.button`
    color: #f1f5f9;
    background: transparent;
    border: none;
    cursor: pointer;
`

const ButtonActive = styled.button`
    color: #faff00;
    background: transparent;
    border: none;
    cursor: pointer;
`

// Replace your code here
class App extends Component {
  state = {boldBtn: false, italicBtn: false, underLineBtn: false, text:""}

  onClickBold = () => {
    const {boldBtn} = this.state
    this.setState({
      boldBtn: !boldBtn
    })
  }

  onClickItalic = () => {
    const {italicBtn} = this.state
    this.setState({
      italicBtn: !italicBtn,
    })
  }

  onClickUnderline = () => {
    const {underLineBtn} = this.state
    this.setState({
      underLineBtn: !underLineBtn,
    })
  }

  setText = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    const {boldBtn, italicBtn, underLineBtn, text} = this.state
    const TextArea = styled.textarea`
      font-weight: ${boldBtn ? 'bold' : 'normal'};
      font-style: ${italicBtn ? 'italic' : 'normal'};
      text-decoration: ${underLineBtn ? 'underline' : 'normal'};
      background-color: #334155;
    `
    return (
      <MAINDIV>
        <InternalDiv>
          <div>
            <h1>Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
          <div>
            <ul>
              {boldBtn ? (
                <li>
                  <ButtonActive data-testid="bold" onClick={this.onClickBold}>
                    <VscBold size={25} />
                  </ButtonActive>
                </li>
              ) : (
                <li>
                  <Button data-testid="bold" onClick={this.onClickBold}>
                    <VscBold size={25} />
                  </Button>
                </li>
              )}

              {italicBtn ? (
                <li>
                  <ButtonActive
                    data-testid="italic"
                    onClick={this.onClickItalic}
                  >
                    <GoItalic size={25} />
                  </ButtonActive>
                </li>
              ) : (
                <li>
                  <Button data-testid="italic" onClick={this.onClickItalic}>
                    <GoItalic size={25} />
                  </Button>
                </li>
              )}

              {underLineBtn ? (
                <li>
                  <ButtonActive
                    data-testid="underline"
                    onClick={this.onClickUnderline}
                  >
                    <AiOutlineUnderline size={25} />
                  </ButtonActive>
                </li>
              ) : (
                <li>
                  <Button
                    data-testid="underline"
                    onClick={this.onClickUnderline}
                  >
                    <AiOutlineUnderline size={25} />
                  </Button>
                </li>
              )}
            </ul>
            <TextArea rows="30" cols="40" value={text} onChange={this.setText} />
          </div>
        </InternalDiv>
      </MAINDIV>
    )
  }
}

export default App
