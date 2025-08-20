# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>

## Points to remember
1. env
2. AWS SES
https://docs.aws.amazon.com/ses/latest/dg/request-production-access.html
strapi-ses-user@1

"dev": "NODE_ENV=development env-cmd -f .env.development strapi develop",
"prod": "NODE_ENV=production env-cmd -f .env.production strapi start",

config/
  env/
    development/
      database.ts
    production/
      database.ts

stashed -> aws-ses

need to update naming sme application

attachments frontend missing



✅ A separate SME application form, with document upload, vetting workflow
✅ Admin review/approval process before SME becomes active
2. No Mention of Payment Handling
For KaaS, you’ll likely:
•	Charge clients per ticket or service tier
•	Pay SMEs per response or hourly
But payment processing (Stripe, PayPal) is missing.
✅ Add future-ready modules for:
•	Client payments
•	SME compensation tracking
•	Invoice generation or receipts
3. No Communication Preview or Collaboration
Your SMEs will respond via:
•	Written documents
•	Possibly Zoom calls
But current system shows only “Respond to Ticket” — is this:
•	A chat window?
•	A file upload system?
•	A structured template response?
✅ Clarify how SMEs deliver value: via file, form, or Zoom links
Add: Upload field + status tags like “Needs Clarification”, “Pending Payment”, “Delivered”
4. Client Experience Could Be Enhanced
What will the client see after submitting the question?
•	Will they get an email confirmation?
•	Will they see “Estimated delivery: 48 hrs”?
✅ Fix: Add customer-facing views:
•	Timeline tracker or progress bar
•	“Download response” button
•	Feedback/rating mechanism for SMEs
5. Admin Reporting Is Basic
Current reporting includes basic stats.
✅ Add:
•	Ticket turnaround time (avg hours per SME)
•	Most requested topics (helps your marketing)
•	SME ratings or feedback (quality control)
 

SME Onboarding Module – End to End Flow 
Objectives:
Allow professionals to apply to become SMEs , vet their credenials , approve or reject them, and activate them into the system.
1. SME Application Form (Public-Facing)
Frontend Form Fields:
•	Full Name
•	Email
•	Phone number
•	LinkedIn URL
•	Years of experience (dropdown: 10–15, 15–20, etc.)
•	Past companies (e.g., ADNOC, Aramco, BH)
•	Areas of expertise (multi-select)
•	Languages spoken
•	CV upload (PDF/DOC)
•	Optional: Technical sample (sanitized report or article)
•	Preferred engagement types:
o	📄 Written brief
o	📞 Live call (Zoom)
o	🧑‍🏫 Mentoring/training
•	Expected rate (optional at MVP)
•	✅ Agree to NDA (checkbox)
🛠 Store in Strapi CMS under sme_applications with status: pending, approved, rejected.
________________________________________
✅ 2. Admin Review & Vetting Panel
In your Admin Dashboard:
•	View list of new SME applications
•	Filters: pending / approved / rejected
•	Columns: Name | Experience | Companies | Areas of Expertise | Status
•	View full application details (expandable panel)
•	Attach internal notes: e.g., “Requested a call for clarification”
•	Approve / Reject toggle
🛠 Store decision, date, and reviewer ID in Strapi
________________________________________
✅ 3. Optional: Auto-Scheduling Interview (Later Stage)
If manual vetting is needed:
•	After application, send Calendly link to schedule a 15-min Zoom call
•	Add a field to admin panel: "Interview Status: scheduled / completed"
________________________________________
✅ 4. Approval Trigger: Email + Account Setup
If approved:
•	Send onboarding email with:
o	Link to log in
o	Default password (with reset)
o	SME Code of Conduct / Response Guidelines
•	Create their user profile in the dashboard:
o	Role: SME
o	Status: Active
o	Assigned categories: e.g., Drilling / Contracts
o	Language preference
🛠 Use Strapi User roles and integrate into dashboard auth (NextAuth, etc.)
________________________________________
✅ 5. SME Dashboard (Post-Login)
Once onboarded, SMEs can:
•	Update their profile (bio, languages, availability)
•	View assigned tickets
•	Submit responses
•	Track payments (future enhancement)
•	View rating/feedback (if applicable)
________________________________________
🧩 Bonus Features (Phase 2+)
Feature	Benefit
SME performance analytics	Helps you identify top contributors
Pre-written response templates	Ensures consistent quality
Language tag matching	Match Arabic speakers to regional requests
Auto-expire inactive SMEs	Keeps network active and relevant

