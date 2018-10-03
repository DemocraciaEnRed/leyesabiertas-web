import React, { Component } from 'react'
// import fetch from 'isomorphic-unfetch'
const result = {
  'id': { '$oid': '5ba111d5fc13ae13f600109a' },
  'author': {
    'name': 'Sherie Kulver',
    'party': 'erat fermentum justo nec condimentum neque sapien placerat ante nulla justo',
    'avatarImg': 'https://robohash.org/voluptassuntdolor.jpg?size=50x50\u0026set=set1'
  },
  'content': {
    'title': 'sagittis nam congue risus semper porta volutpat',
    'imageCover': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJfSURBVDjLpVNNiFJRFD6O4j8EMpoMTGU6LUbCMJAmmFzYQpjViIgkSNtoldDOzUCbCIJA2rlpNv4thiCY5dSmNJOiYhwRJ8nIMdT8/3nq7ZxH7/GaoE33cbjn3ne+737nnHtljDH4n6E4vZFMJg04RZB4C2cLznK0MtoLXD8JhUI/pPEyqQIEb2s0ml2n06kzGo2gVCr5/clkAo1GA/L5/KDf798Oh8MZEUQEZIlEwp3NZtlgMGAcx7HhcMja7TZrtVqs2+2y8XjMEMxisRgLBoNeAbdEJAjWa7XaXbvdDnK5HHq9HiABIBFMp1NAIDSbTcjlclCtVmGxWDwNBAJ6wi79FhJxOByrKpUKUAEFwHw+503w0+k0RKNR0Ol0YDAYqDb3RQIM8ppMJj5XCp7NZiIB+ZlMhurD+6VSCfR6Pcn3igS4cNHpo9FIBApGJwtgUnN4eAgUi75LbKPQCalsMjo5lUrx/4V9wRcwAkEOT9+gtlEaUrBARgD7nYsglylg+GlIsJy0Bvv1eh3UarUom8DSVOx3rWBZs8DKeTN8t/Gd2JfW4HGhUPhKLSuXy2LOvGz8Lt9bgwuWc2BdRhKTFZbNBhhutm+5H1xTijcxHo+7O53OQa1WA7wTUCwWoVKpgC28CiqTAs6eMYNt5RJM51M4/vYF8u/fjicT7uUfV9nv92/j+hn2WU/9ppqQClJWXT8Cz1UPT3Dw+hWcnDQ28g8/vJGdfo0+n8+AexF0tzDPdfRH6B+Pbvy84rl+E7g5B3vP9+Ddo4+yvx7Tv8bmjouhZODGdL05+Bw74gl+AetZvIbkaCwtAAAAAElFTkSuQmCC',
    'fields': {
      'articles': {},
      'fundation': {}
    }
  },
  'commentaries': 20,
  'limitDate': '7/7/2018',
  'tagTitle': 'justo morbi ut',
  'version': 5,
  'createdAt': '6/27/2018'
}

export default class extends Component {
  state = {
    project: result,
    isAuthor: false,
    isLoggedIn: true,
    editionMode: false,
    withComments: false
  }

  switchComments = () => {
    this.setState((prevState) => ({
      withComments: !prevState.withComments
    }), () => console.log(this.state.withComments))
  }

  switchEdition = () => {
    this.setState((prevState) => ({
      editionMode: !prevState.editionMode
    }), () => console.log(this.state.editionMode))
  }

  render () {
    return (
      <div>
        Articulado
      </div>
    )
  }
}
