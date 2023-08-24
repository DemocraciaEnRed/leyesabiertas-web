import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import getConfig from 'next/config'
const { publicRuntimeConfig: { API_URL } } = getConfig()
import fetch from 'isomorphic-unfetch'
import Masonry from 'react-masonry-component';
import Card from '../../components/card/component'
import Button from '../../elements/button/component'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 60px 10rem 60px;
  background-color: #5c98bd;
  @media (max-width:760px){
    padding: 8rem 0;
  }

`

const ValidateBoxWrapper= styled.div`
width:80%;
background-color: #fFf;
text-align:center
`
const ApoyoLogo = styled.img`
margin:3rem 0
filter: invert(0.6) sepia(0.4) saturate(5) hue-rotate(175deg);
`

const Box = styled.div`
  font-size: 1.8rem;
  padding: 20px 40px 0 40px;
  p{
    font-family: var(--light);
    :first-of-type{
      margin: 24px 0
      font-size:3.5rem
      font-family: var(--bold)
    }
  }
`

const ProjectsTitle = styled.h1`
  font-weight: 100;
  font-family: var(--light);
  margin-top: 50px;
  padding-bottom: 20px;
  a{
    color:#5c98bd;
  }
`

export default () => {
  const [isValidado, setIsValidado] = useState(null);
  const [project, setProject] = useState(null);
  const [projects, setProjects] = useState(null);

  // mount event
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const v = urlParams.get('v');

    fetch(`${API_URL}/api/v1/documents/apoyo-anon-validar/${v}`)
      .then(r => r.json())
      .then(j => {
        if (j.error){
          setIsValidado(false)
          fetch(`${API_URL}/api/v1/documents`).then(r => r.json()).then(j => setProjects(j.results))
        }else {
          let rProject = j.document
          setProject(rProject)
          setIsValidado(true)
          fetch(`${API_URL}/api/v1/documents`).then(r => r.json()).then(j => setProjects(j.results.filter(d => d._id != rProject._id)))
        }
      })
  }, [])

  return (
    <Wrapper>
      <ValidateBoxWrapper>

      <Box>
        { isValidado === null ?
          'Validando apoyo...'
        : (
          isValidado ?
          <div>
            <p><bold>¡Gracias!</bold></p>
            <p>Su apoyo se ha validado con éxito</p>
            <ApoyoLogo src={`${'/static/assets/hand-holding-heart-solid.svg'}`} height={100} />
          </div>
            
          :
            'No se ha podido validar su apoyo'
        )
        }
      </Box>

        <Link href={project && { pathname: '/propuesta', query: { id: project._id } } || '/'}>
          <Button primary>
            volver al {project && 'proyecto' || 'inicio'}
          </Button>
        </Link>

      <ProjectsTitle>O vea otros proyectos <Link href='/' >aquí</Link></ProjectsTitle>
      {/* {projects &&
        <Masonry style={{ width: '100%', margin: '3.1rem 0 1.6rem' }}>
          {projects.map((p, i) => (
            <Card project={p} key={i} />
          ))}
        </Masonry>
      } */}
      </ValidateBoxWrapper>

    </Wrapper>
  )
}
