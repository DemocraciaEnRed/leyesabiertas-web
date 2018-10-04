import React, { Component, createContext } from 'react'
import ProjectHeader from '../../components/project-header/component'
import ModeBar from '../../components/mode-bar/component'
import Editor from '../../components/editor/component'
import ModeButton from '../../elements/mode-button/component'
// import fetch from 'isomorphic-unfetch'

const result = {
  'id': { '$oid': '5ba111d5fc13ae13f600109a' },
  'title': 'sagittis nam congue risus semper porta volutpat',
  'author': {
    'name': 'Sherie Kulver',
    'party': 'erat fermentum justo nec condimentum neque sapien placerat ante nulla justo',
    'avatarImg': 'https://robohash.org/voluptassuntdolor.jpg?size=50x50\u0026set=set1'
  },
  'content': {
    'imageCover': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJfSURBVDjLpVNNiFJRFD6O4j8EMpoMTGU6LUbCMJAmmFzYQpjViIgkSNtoldDOzUCbCIJA2rlpNv4thiCY5dSmNJOiYhwRJ8nIMdT8/3nq7ZxH7/GaoE33cbjn3ne+737nnHtljDH4n6E4vZFMJg04RZB4C2cLznK0MtoLXD8JhUI/pPEyqQIEb2s0ml2n06kzGo2gVCr5/clkAo1GA/L5/KDf798Oh8MZEUQEZIlEwp3NZtlgMGAcx7HhcMja7TZrtVqs2+2y8XjMEMxisRgLBoNeAbdEJAjWa7XaXbvdDnK5HHq9HiABIBFMp1NAIDSbTcjlclCtVmGxWDwNBAJ6wi79FhJxOByrKpUKUAEFwHw+503w0+k0RKNR0Ol0YDAYqDb3RQIM8ppMJj5XCp7NZiIB+ZlMhurD+6VSCfR6Pcn3igS4cNHpo9FIBApGJwtgUnN4eAgUi75LbKPQCalsMjo5lUrx/4V9wRcwAkEOT9+gtlEaUrBARgD7nYsglylg+GlIsJy0Bvv1eh3UarUom8DSVOx3rWBZs8DKeTN8t/Gd2JfW4HGhUPhKLSuXy2LOvGz8Lt9bgwuWc2BdRhKTFZbNBhhutm+5H1xTijcxHo+7O53OQa1WA7wTUCwWoVKpgC28CiqTAs6eMYNt5RJM51M4/vYF8u/fjicT7uUfV9nv92/j+hn2WU/9ppqQClJWXT8Cz1UPT3Dw+hWcnDQ28g8/vJGdfo0+n8+AexF0tzDPdfRH6B+Pbvy84rl+E7g5B3vP9+Ddo4+yvx7Tv8bmjouhZODGdL05+Bw74gl+AetZvIbkaCwtAAAAAElFTkSuQmCC',
    'fields': {
      'articles': {
        'object': 'value',
        'document': {
          'object': 'document',
          'data': {

          },
          'nodes': [
            {
              'object': 'block',
              'type': 'paragraph',
              'data': {

              },
              'nodes': [
                {
                  'object': 'text',
                  'leaves': [
                    {
                      'object': 'leaf',
                      'text': 'ARTÍCULO 1° — ',
                      'marks': [
                        {
                          'object': 'mark',
                          'type': 'title',
                          'data': {

                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'object': 'block',
              'type': 'paragraph',
              'data': {

              },
              'nodes': [
                {
                  'object': 'text',
                  'leaves': [
                    {
                      'object': 'leaf',
                      'text': 'Objeto. ',
                      'marks': [

                      ]
                    },
                    {
                      'object': 'leaf',
                      'text': 'La presente ley tiene por objeto garantizar el efectivo ejercicio del derecho de acceso a la zinformación pública, promover la participación ciudadana y la transparencia de la gestión pública, y se funda en los siguientes principios: Presunción de publicidad: toda la información en poder del Estado se presume pública, salvo las excepciones previstas por esta ley. Transparencia y máxima divulgación: toda la información en poder, custodia o bajo control del sujeto obligado debe ser accesible para todas las personas.',
                      'marks': [
                        {
                          'object': 'mark',
                          'type': 'comment',
                          'data': {
                            'data-id': '5bb634f39f33ea217287e6ac'
                          }
                        }
                      ]
                    },
                    {
                      'object': 'leaf',
                      'text': ' El acceso a la información pública sólo puede ser limitado cuando concurra alguna de las excepciones previstas en esta ley, de acuerdo con las necesidades de la sociedad democrática y republicana, proporcionales al interés que las justifican. ',
                      'marks': [
                        {
                          'object': 'mark',
                          'type': 'comment',
                          'data': {
                            'data-id': '5bb634cf9f33ea217287e6aa'
                          }
                        },
                        {
                          'object': 'mark',
                          'type': 'comment',
                          'data': {
                            'data-id': '5bb634f39f33ea217287e6ac'
                          }
                        }
                      ]
                    },
                    {
                      'object': 'leaf',
                      'text': 'Informalismo: las reglas de procedimiento para acceder a la información deben facilitar el ejercicio del derecho y su inobservancia no podrá constituir un obstáculo para ello.',
                      'marks': [
                        {
                          'object': 'mark',
                          'type': 'comment',
                          'data': {
                            'data-id': '5bb634cf9f33ea217287e6aa'
                          }
                        },
                        {
                          'object': 'mark',
                          'type': 'comment',
                          'data': {
                            'data-id': '5bb634e19f33ea217287e6ab'
                          }
                        },
                        {
                          'object': 'mark',
                          'type': 'comment',
                          'data': {
                            'data-id': '5bb634f39f33ea217287e6ac'
                          }
                        }
                      ]
                    },
                    {
                      'object': 'leaf',
                      'text': ' Los sujetos obligados no pueden fundar el rechazo de la solicitud de información en el incumplimiento de requisitos formales o de reglas de procedimiento.',
                      'marks': [
                        {
                          'object': 'mark',
                          'type': 'comment',
                          'data': {
                            'data-id': '5bb634e19f33ea217287e6ab'
                          }
                        },
                        {
                          'object': 'mark',
                          'type': 'comment',
                          'data': {
                            'data-id': '5bb634f39f33ea217287e6ac'
                          }
                        }
                      ]
                    },
                    {
                      'object': 'leaf',
                      'text': ' Máximo acceso: la información debe publicarse de forma completa, con el mayor nivel de desagregación posible y por la mayor cantidad de medios disponibles. Apertura: la información debe ser accesible en formatos electrónicos abiertos, que faciliten su procesamiento por medios automáticos que permitan su reutilización o su redistribución por parte de terceros.',
                      'marks': [
                        {
                          'object': 'mark',
                          'type': 'comment',
                          'data': {
                            'data-id': '5bb634f39f33ea217287e6ac'
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'object': 'block',
              'type': 'paragraph',
              'data': {

              },
              'nodes': [
                {
                  'object': 'text',
                  'leaves': [
                    {
                      'object': 'leaf',
                      'text': '',
                      'marks': [

                      ]
                    }
                  ]
                }
              ]
            },
            {
              'object': 'block',
              'type': 'paragraph',
              'data': {

              },
              'nodes': [
                {
                  'object': 'text',
                  'leaves': [
                    {
                      'object': 'leaf',
                      'text': 'ARTÍCULO 2° — ',
                      'marks': [
                        {
                          'object': 'mark',
                          'type': 'title',
                          'data': {

                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              'object': 'block',
              'type': 'paragraph',
              'data': {

              },
              'nodes': [
                {
                  'object': 'text',
                  'leaves': [
                    {
                      'object': 'leaf',
                      'text': 'Objeto. La presente ley tiene por objeto garantizar el efectivo ejercicio del derecho de acceso a la zinformación pública, promover la participación ciudadana y la transparencia de la gestión pública, y se funda en los siguientes principios: Presunción de publicidad: toda la información en poder del Estado se presume pública, salvo las excepciones previstas por esta ley. Transparencia y máxima divulgación: toda la información en poder, custodia o bajo control del sujeto obligado debe ser accesible para todas las personas. El acceso a la información pública sólo puede ser limitado cuando concurra alguna de las excepciones previstas en esta ley, de acuerdo con las necesidades de la sociedad democrática y republicana, proporcionales al interés que las justifican. Informalismo: las reglas de procedimiento para acceder a la información deben facilitar el ejercicio del derecho y su inobservancia no podrá constituir un obstáculo para ello. Los sujetos obligados no pueden fundar el rechazo de la solicitud de información en el incumplimiento de requisitos formales o de reglas de procedimiento. Máximo acceso: la información debe publicarse de forma completa, con el mayor nivel de desagregación posible y por la mayor cantidad de medios disponibles. Apertura: la información debe ser accesible en formatos electrónicos abiertos, que faciliten su procesamiento por medios automáticos que permitan su reutilización o su redistribución por parte de terceros.',
                      'marks': [

                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      },
      'fundation': {}
    }
  },
  'commentaries': 20,
  'limitDate': '7/7/2018',
  'tagTitle': 'justo morbi ut',
  'version': 5,
  'createdAt': '6/27/2018'
}

const ArticlesContext = createContext()

class ArticlesContainer extends Component {
  state = {
    project: result,
    isAuthor: false,
    isLoggedIn: true,
    editionMode: false,
    withComments: true
  }

  switchComments = () => {
    this.setState((prevState) => ({
      withComments: !prevState.withComments
    }))
  }

  switchEdition = () => {
    this.setState((prevState) => ({
      editionMode: !prevState.editionMode
    }))
  }

  render () {
    const {
      project,
      isAuthor,
      isLoggedIn,
      editionMode,
      withComments
    } = this.state
    return (
      <ArticlesContext.Provider value={{
        project: project,
        isAuthor: isAuthor,
        isLoggedIn: isLoggedIn,
        editionMode: editionMode,
        withComments: withComments,
        switchComments: this.switchComments,
        switchEdition: this.switchEdition
      }}>
        <ProjectHeader project={project} />
        <ModeBar>
          <ModeButton mode={'read-only'}>Vista lectura</ModeButton>
          <ModeButton mode={'with-comments'}>Vista con comentarios</ModeButton>
        </ModeBar>
        <Editor
          value={project.content.fields.articles}
          withComments={withComments}
          id={project.id} />
      </ArticlesContext.Provider>
    )
  }
}

export { ArticlesContainer, ArticlesContext }
