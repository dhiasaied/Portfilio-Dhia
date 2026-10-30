Original screenshots for the Full Stack Development projects
============================================================

LinkedIn shows a profile's activity feed only to signed-in members, so posts cannot be
discovered automatically. Individual post pages ARE public, so the import works from post links.

Automatic import (recommended):
  1. Put one line per project in tools/linkedin-posts.txt:   <id>  <LinkedIn post URL>
     (on LinkedIn: open the post > "..." > "Copy link to post"), or generate the file from
     LinkedIn's official data export:  python tools/linkedin_import.py --from-export Shares.csv
  2. From the portfolio folder run:  python tools/linkedin_import.py tools/linkedin-posts.txt
     It downloads only that post's images, optimises them into this folder as <id>-1.jpg,
     <id>-2.jpg... and updates DEV_MEDIA in code.html (cards, gallery and LinkedIn link).

Manual import:
  Save the images here as <id>-1.jpg, <id>-2.jpg... and add to DEV_MEDIA in code.html:
     hamborghini: { post: 'https://www.linkedin.com/posts/...', images: 3 },
  Open code.html?slots to see each card's id and expected file name.

Project id         title

  hamborghini      Hamborghini
  devassess        DevAssess AI
  nexus            NEXUS Humanoid Robotics
  stocktn          StockTN Desktop
  sanituslearn     SanitusLearn
  gymcoach         GymCoach
  motomarine       Motomarine
  cyberpaint       CyberPaint
  aistack          AIStack
  calmaai          CalmaAI
  mindlift         MindLift
  radar            Arduino Ultrasonic Radar
  gradix           Gradix
  jfxsomme         JavaFX Sum Calculator
  jfxtext          JavaFX TextField
  portfolio-v1     Portfolio v1
  vibelex          Vibelex
  nexora           Nexora
  travelai         Travel Planner AI
  nanabana         Nanabana AI Prompt Platform
  slicego          Slice Go
  animalia         Animalia
  rigmova          Rigmova
  autotech         AutoTech
  vistalia         Vistalia
  balancedlife     BalancedLife
  petitpas         Petit Pas
  orderconf        Order Confirmation
  gymly            Gymly
  globalink        GlobaLink
  conjurojo        ConjuRojo
  mathgo           MathGo!
  reelescape       ReelEscape
  mundolibro       MundoLibro
  cheftradizio     ChefTradizio
  horizia          Horizia
  velabelleza      Vela Belleza
  mamisazules      Mamis Azules
  codeascend       CodeAscend
  novaplay         NovaPlay
  geovision        GeoVision
  neotube          NeoTube
  stageconnect     StageConnect+
  mathly           Mathly
  tesla            Tesla Humanoid Robot AI
  dashpro          Dashboard Pro
  tunichic         TuniChic
  taskflow         TaskFlow
  technihome       TechniHome
  budget           Gestion Budgétaire
  servelink        ServeLink
  medpartix        MedPartix
  dashexplorer     DashExplorer
  droneui          AngularDroneUI
  agentvoiture     Agent Voiture
  appjson          Application JSON
  pottery          Pottery App
  chatmsg          ChatMsg
  snake            Snake App
  novoedu          Novo Edu
  python           Python Projects
  navette          Tunisie Navette
  apc              APC Pédagogie
