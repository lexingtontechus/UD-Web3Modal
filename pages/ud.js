import { useState } from "react"
import connectors from "../components/connectors.js"

function Home() {
  const connector = connectors["UAuth"][0]

  // Get web3-react hooks from UAuthConnector
  const { useIsActivating, useIsActive } = connectors["UAuth"][1]
  const isActivating = useIsActivating()
  const isActive = useIsActive()

  const [connectionStatus, setConnectionStatus] = useState("Disconnected")
  const [error, setError] = useState()

  // Handle connector activation and update connection/error state
  const handleToggleConnect = () => {
    setError(undefined) // Clear error state

    if (isActive) {
      if (connector?.deactivate) {
        void connector.deactivate()
      } else {
        void connector.resetState()
      }
      setConnectionStatus("Disconnected")
    } else if (!isActivating) {
      setConnectionStatus("Connecting...")

      // Activate the connector and update states
      connector
        .activate(1)
        .then(() => {
          setConnectionStatus("Connected")
        })
        .catch(e => {
          connector.resetState()
          setError(e)
        })
    }
  }

  return (
    <>
      <h1>Login with Unstoppable</h1>
      <h3>
        Status - {error?.message ? "Error: " + error.message : connectionStatus}
      </h3>

      <button onClick={handleToggleConnect} disabled={false}>
        {isActive ? "Disconnect" : "Connect"}
      </button>
    </>
  )
}

export default Home
