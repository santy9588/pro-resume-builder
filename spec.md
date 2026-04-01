# Pro Resume Builder

## Current State
Empty project with Motoko backend and React frontend scaffolding.

## Requested Changes (Diff)

### Add
- 20+ resume/CV templates covering all major styles
- Template gallery page with preview cards
- Resume editor with form fields (personal info, experience, education, skills, summary)
- Live preview panel showing selected template
- Template categories: Minimalist, Modern, Creative, Executive, Academic, Technical, Two-Column, Dark Theme, Timeline, Infographic, ATS-Friendly, and more
- Download/Print functionality (browser print)
- Template switching without losing data

### Modify
- N/A (new project)

### Remove
- N/A

## Implementation Plan
1. Define resume data model (TypeScript interfaces)
2. Build 20+ template components, each rendering resume data differently
3. Build editor form with sections: Personal Info, Summary, Experience, Education, Skills, Certifications, Languages, Projects
4. Template gallery/picker page
5. Main app layout with editor + live preview
6. Print/export via browser print CSS
7. Routing between gallery and editor views
