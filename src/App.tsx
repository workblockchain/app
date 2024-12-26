import {useEffect} from "react"
import {styled} from "styled-components"

export default function App() {
  useEffect(() => {
    document.title = "Work Blockchain"
  })

  return (
    <>
      <Placeholder>Placeholder</Placeholder>
    </>
  )
}

const Placeholder = styled.div`
  /* Center. */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Full. */
  position: absolute;
  width: 100%;
  height: 100%;
`
