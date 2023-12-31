import React from 'react'
import resume from './assets/resume.pdf'

function Resume() {
  return (
    <div class="resume-info">
      <h2>Resume</h2>
      <p>This is my resume <a href={resume} download="daniel_resume">download here</a></p>
      <h2>Front-end</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>javaScript</li>
      </ul>
      <h2>Back-end</h2>
      <ul>
        <li>API</li>
        <li>Sequelize</li>
        <li>Express</li>
        <li>React</li>
      </ul>
    </div>
  )
}

export default Resume