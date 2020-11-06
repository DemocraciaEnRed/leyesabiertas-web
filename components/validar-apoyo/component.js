import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import getConfig from 'next/config'
const { publicRuntimeConfig: { API_URL } } = getConfig()
import fetch from 'isomorphic-unfetch'
import Masonry from 'react-masonry-component';
import Card from '../../components/card/component'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 60px 0 60px;
`
const Box = styled.div`
  font-size: 1.8rem;
  padding: 20px 40px;
  background-color: #74acce;
  color: white;
  margin-bottom: 20px;
`
const Note = styled.div`
  font-size: 1.6rem;
  a {
    color:#5c97bc
    font-weight: bold;
  }
  a:hover,a:active,a:focus {
    color:#2f6a8e
  }
`

const ProjectsTitle = styled.h1`
  margin-top: 50px;
`

export default () => {
  const [isValidado, setIsValidado] = useState(null);
  const [project, setProject] = useState(null);
  const [projects, setProjects] = useState(null);

  // mount event
  useEffect(() => {
    fetch(`${API_URL}/api/v1/documents`).then(r => r.json()).then(j => setProjects(j.results))

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const v = urlParams.get('v');

    fetch(`${API_URL}/api/v1/documents/apoyo-anon-validar/${v}`)
      .then(r => r.json())
      .then(j => {
        if (j.error)
          setIsValidado(false)
        else {
          setProject(j.document)
          setIsValidado(true)
        }
      })
  }, [])

  return (
    <Wrapper>

      <Box>
        { isValidado === null ?
          'Validando apoyo...'
        : (
          isValidado ?
            '¡Su apoyo ha sido validado con éxito!'
          :
            'No se ha podido validar su apoyo'
        )
        }
      </Box>

      <Note>
        Haga click&nbsp;
        <Link href={project && { pathname: '/propuesta', query: { id: project._id } } || '/'}>
          aquí
        </Link>
        &nbsp;para volver al {project && 'proyecto' || 'inicio'}
      </Note>

      <ProjectsTitle>Otros proyectos que puedes apoyar:</ProjectsTitle>
      {projects &&
        <Masonry style={{ width: '100%', margin: '3.1rem 0 1.6rem' }}>
          {projects.map((p, i) => (
            <Card project={p} key={i} />
          ))}
        </Masonry>
      }

    </Wrapper>
  )
}
