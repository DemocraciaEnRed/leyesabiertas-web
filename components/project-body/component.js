import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CommentCard from '../../components/comment-card/component'
import ProjectLinkArticulate from '../../components/project-link-articulate/component'

const ProjectBodyContainer = styled.div`
  min-height: 383px;
  width:90%;
  display: flex;
  flex-direction:column;
  margin-right:auto;
  margin-left:auto;
  padding:5% 20% 5% 10%;

`
const P = styled.p`
  font-size: 18px;
  line-height: 1.94;
  padding-bottom:3rem;
  color: #203340;`

const H2 = styled.h2`
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.42;
  letter-spacing: normal;
  color: #5c97bc;
  padding-bottom:4rem;`

const BoldP = styled.p`
  font-size: 18px;
  line-height: 1.94;
  padding-bottom:3rem;
  color: #203340;
  font-family:var(--bold);
`

const ProjectBody = ({ project }) => (
  <ProjectBodyContainer>
    <H2>Porque proponemos una Ley de Acceso a la información Pública</H2>
    <BoldP>ARTÍCULO 1 - </BoldP>
    <P>Kinfolk mlkshk pork belly normcore twee tattooed next level pinterest farm-to-table. Dreamcatcher intelligentsia kinfolk ramps swag next level disrupt, cred kale chips locavore XOXO before they sold out subway tile. Humblebrag lomo mixtape coloring book truffaut meditation, helvetica street art microdosing. Tattooed microdosing skateboard helvetica tumblr ennui.

Dreamcatcher air plant chambray VHS kickstarter. Fingerstache meggings vexillologist gentrify seitan. Wayfarers sriracha master cleanse edison bulb, actually cray tousled pok pok cardigan beard craft beer letterpress af. Cardigan adaptogen vegan ramps godard aesthetic plaid schlitz post-ironic enamel pin chicharrones church-key. Kombucha disrupt stumptown coloring book banjo vegan listicle small batch. Vegan truffaut dreamcatcher banh mi VHS la croix quinoa microdosing. Banjo 8-bit viral distillery four dollar toast readymade slow-carb narwhal scenester vape.

Vape wayfarers locavore, blue bottle keytar mumblecore hell of post-ironic listicle 90's williamsburg tousled you probably haven't heard of them roof party. XOXO vegan lyft activated charcoal paleo. Blue bottle tote bag farm-to-table, vegan microdosing scenester ennui. Subway tile ramps next level knausgaard hot chicken tattooed craft beer. Seitan sartorial meggings selvage, occupy stumptown PBR&B. Flexitarian 90's helvetica typewriter, raw denim seitan squid hell of listicle master cleanse dreamcatcher.

Bespoke tumeric sartorial heirloom blue bottle. Plaid tumeric pickled, vape selvage cloud bread kogi taiyaki vaporware. Farm-to-table paleo gochujang venmo shabby chic literally tumblr, cray offal tbh la croix wolf jianbing vexillologist godard. Chartreuse cold-pressed pabst, letterpress subway tile hashtag vaporware tilde jean shorts la croix PBR&B celiac gochujang tumeric deep v. Semiotics aesthetic hell of tacos marfa before they sold out, fashion axe banh mi iceland four loko pabst neutra XOXO biodiesel tumblr. Helvetica food truck banjo celiac, sartorial try-hard raw denim tacos yuccie.

Meditation green juice subway tile franzen skateboard next level. Venmo edison bulb before they sold out waistcoat hexagon meh selvage shaman mlkshk. Af air plant next level, try-hard pitchfork activated charcoal banjo 3 wolf moon cornhole cred locavore cliche lomo squid flannel. Aesthetic chartreuse church-key vice kogi meggings. Schlitz coloring book mlkshk mumblecore live-edge scenester meggings knausgaard everyday carry.</P>
    <ProjectLinkArticulate />

  </ProjectBodyContainer>
)

ProjectBody.propTypes = {
  project: PropTypes.object.isRequired
}

export default ProjectBody
