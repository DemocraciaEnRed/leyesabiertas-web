import React from 'react'
import getConfig from 'next/config'
const { publicRuntimeConfig: { API_URL } } = getConfig()

const DocumentTagsContext = React.createContext({
  fetchDocumentTags: async () => {
    try {
      const results = await (await fetch(`${API_URL}/api/v1/document-tags`, {
        'headers': {
          'Content-Type': 'application/json'
        }
      })).json()
      console.log('fetchEtiquetas ok, count:', results.results.length)
      return results.results
    } catch (err) {
      console.error('fetchEtiquetas error:', err)
      return []
    }
  }
})

const WithDocumentTagsContext = (Component) => {
  return function WithDocumentTagsContextComponent (props) {
    return (
      <DocumentTagsContext.Consumer>
        {(value) => <Component {...props} fetchDocumentTags={value.fetchDocumentTags} />}
      </DocumentTagsContext.Consumer>
    )
  }
}

export default WithDocumentTagsContext
