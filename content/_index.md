---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: Biography
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
  # - block: skills
  #  content:
  #    title: Skills
  #    text: ''
  #    # Choose a user to display skills from (a folder name within `content/authors/`)
  #    username: admin
  #  design:
  #    columns: '1'
  - block: experience
    id: experience
    content:
      title: Experience
      # Date format for experience
      #   Refer to https://docs.hugoblox.com/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: Research Assistant
          company: INESC-ID/IST
          company_url: https://tecnico.ulisboa.pt
          location: Lisbon
          date_start: '2023-02-01'
          date_end: ''
          description: Developing and integrating software tools in logical modeling of biological regulatory networks.
        - title: Volunteer Instructor
          company: TreeTree2
          company_url: https://www.treetree2.org
          location: Lisbon
          date_start: '2023-07-01'
          date_end: ''
          description: Instructor in online After School programs for young students in multiple scientific areas.
        - title: Volunteer Student Mentor
          company: Instituto Superior Técnico - University of Lisbon
          company_url: https://tecnico.ulisboa.pt
          location: Lisbon
          date_start: '2022-10-01'
          date_end: ''
          description: Student mentor of BSc and Erasmus MSc students.
        
    design:
      columns: '2'
  - block: awards
    content:
      title: 'Awards'
      subtitle:
      # Date format: https://docs.hugoblox.com/customization/#date-format
      date_format: Jan 2006
      # Accomplishments.
      #   Add/remove as many `item` blocks below as you like.
      #   `title`, `organization`, and `date_start` are the required parameters.
      #   Leave other parameters empty if not required.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: Academic Excellence Diploma
          date_start: '2022-09-01'
          date_end: '2023-06-01'
          description: ''
          organization: Instituto Superior Técnico
          organization_url: https://tecnico.ulisboa.pt
        - title: Academic Merit Diploma
          date_start: '2021-09-01'
          date_end: '2022-06-01'
          description: ''
          organization: Instituto Superior Técnico
          organization_url: https://tecnico.ulisboa.pt

    design:
      columns: '2'

  - block: certificates
    content:
      title: 'Certificates'
      subtitle:
      # Date format: https://docs.hugoblox.com/customization/#date-format
      date_format: Jan 2006
      # Accomplishments.
      #   Add/remove as many `item` blocks below as you like.
      #   `title`, `organization`, and `date_start` are the required parameters.
      #   Leave other parameters empty if not required.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: C1 Advanced - Grade A
          date_start: '2023-12-01'
          organization: Cambridge Assessment English
          organization_url: https://www.cambridgeenglish.org
        - title: CS50x - Final grade 100%
          url: ''
          date_start: '2021-03-01'
          description: 'Harvard introductory course to Computer Science'
          organization: edX
          organization_url: https://www.edx.org

    design:
      columns: '2'

  - block: portfolio
    id: projects
    content:
      title: Projects
      date_format: Jan 2006
      filters:
        folders:
          - projects

    design:
      columns: '2'
---
