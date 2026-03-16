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
        - title: PyTorch Contributor
          company: PyTorch
          company_url: https://pytorch.org
          date_start: '2024-02-01'
          date_end: '2024-07-01'
          description: Implementing lowerings for torch.compile, optimizing average pooling backwards 3D by 100%.
        - title: Student Researcher
          company: INESC-ID/IST
          company_url: https://tecnico.ulisboa.pt
          date_start: '2023-02-01'
          date_end: '2024-07-01'
          description: Developing software tools for computational biology -- boolean logical modeling of biological regulatory networks.
        - title: Volunteer Instructor
          company: TreeTree2
          company_url: https://www.treetree2.org
          date_start: '2023-07-01'
          date_end: '2024-07-01'
          description: Instructor in online After School programs for young students in multiple scientific areas.
        - title: STT - Cybersecurity CTF Team Member
          company: Instituto Superior Técnico
          company_url: https://tecnico.ulisboa.pt
          date_start: '2022-09-01'
          date_end: '2023-09-01'
          description: Competing in cybersecurity Capture The Flag competitions.
        - title: Volunteer Student Mentor
          company: Instituto Superior Técnico
          company_url: https://tecnico.ulisboa.pt
          date_start: '2022-10-01'
          date_end: '2024-07-01'
          description: Student mentor of BSc and Erasmus MSc students.
        
    design:
      columns: '2'
  - block: markdown
    content:
      title: 'Awards'
      text: |
        - **"Lacaixa" Foundation Postgraduate Fellow** (2024-2025)
        - **Linux Foundation Scholarship - PyTorch** (2024)
        - **University of Lisbon Best Student Award** (2021-2022)
        - **Santander Excellence Scholarship** (2023-2024)
        - **Academic Excellence Diploma** (2022-2023)
        - **Oeiras Scholarship** (2022-2023)
        - **Academic Merit Diploma** (2021-2022)
        - **Oeiras Scholarship** (2021-2022)
        - **Secondary Education in Music with Merit** (2008-2021)
        - **Secondary Education with Merit** (2018-2021)
        - **Honourable Mention in Guitar Young Talents Contest** (2012)
    design:
      columns: '2'

  - block: markdown
    content:
      title: 'Certificates'
      text: |
        - **Machine Learning Engineering for Production (MLOps) - DeepLearning.AI**
        - **Deep Learning Specialization - DeepLearning.AI**
        - **CEFR C2 English - Cambridge Assessment English**
        - **Open Water Scuba Diver**
        - **CS50x**
        - **Blockchain Principles**
    design:
      columns: '2'

  - block: markdown
    id: projects
    content:
      title: Side Projects
      text: |
        ### Avalanche Prediction
        Bayesian approach to predict the severity of an avalanche in a given region, and identification of the optimal location for dam placement and avalanche mitigation. Bayesian Optimization, Multi-fidelity, Sensitivity Analysis, Gaussian Processes, etc.

        ### Trading Bot
        A machine learning pipeline for prediction of asset value using a customly designed LSTM model. Developed efficient pipelines for API data extraction, web-scraping, cleaning, and preprocessing data from hundreds of sources. All-time-high accuracy of about 64%. PyTorch, Tensorflow, Keras, Numpy, Pandas.

        ### MyFriend
        Web application allowing for the creation and conversation with an AI-generated psychologist. LLMs, Speech Synthesis and Voice recognition to create a realistic therapist character and enable a fluid conversation with the user. Node.js, React, AWS.

        ### Compiler
        Coded a compiler for this made-up language called TIL supporting recursion, conditionals, loops, etc. From scratch (no libraries), in C++.

        ### Filesystem
        Implemented a filesystem supporting concurrent access, multithreaded operations, and implemented a message broker on top of it. From scratch (no libraries), in C.

        ### Bimaru AI Engine
        Solved the Bimaru puzzle, finding the optimal solution extremely fast using search algorithms.



    design:
      columns: '2'

  - block: markdown
    id: travel
    content:
      title: 'Travel Map'
      subtitle: ''
      text: |-
        <div id="chartdiv" style="width:100%;height:500px;"></div>
        <div id="travel-stats"></div>
        <style>
        #chartdiv { max-width:100%; }
        .country-list { display:flex; flex-wrap:wrap; gap:0.5rem; list-style:none; padding:0; margin:1rem 0 0 0; }
        .country-tag { background:#1565c0; color:#fff; padding:0.25rem 0.75rem; border-radius:1rem; font-size:0.9rem; }
        </style>
        <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
        <script src="https://cdn.amcharts.com/lib/5/map.js"></script>
        <script src="https://cdn.amcharts.com/lib/5/geodata/worldLow.js"></script>
        <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
        <script src="/js/travel-map.js"></script>
    design:
      columns: '1'
---
