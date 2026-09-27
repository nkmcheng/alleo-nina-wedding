# RSVP setup — Google Sheet

Replies go straight into a Google Sheet in **nkmcheng@gmail.com**'s Drive. You can download it as Excel any time (File → Download → Microsoft Excel).

## One-time setup (about 10 minutes, on a computer)

1. Signed in as **nkmcheng@gmail.com**, go to [sheets.new](https://sheets.new) and name the sheet **Alleo & Nina — RSVP**.
2. **Extensions → Apps Script.** Delete the sample code, paste in everything from [`Code.gs`](Code.gs), and click **Save** (💾).
3. Go back to the sheet and **reload the page**. A new **RSVP** menu appears in the toolbar.
4. Click **RSVP → Set up tabs**. Google asks for permission the first time:
   - choose your account → **Advanced** → **Go to (project name) (unsafe)** → **Allow**.
   - The "unsafe" warning appears because you wrote the script yourself and Google hasn't reviewed it. It only touches this one sheet.
5. Back in Apps Script: **Deploy → New deployment** → click the ⚙ next to "Select type" → **Web app**.
   - Description: `RSVP`
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy**, then copy the **Web app URL**. It ends in `/exec`.
6. Send that URL to Claude. It goes into the site, and the RSVP card then goes live.

## Adding guests

Fill in one row per invitation on the **Guests** tab:

| Name | Role | Additional guests | Contact |
|---|---|---|---|
| Juan Dela Cruz | Guest | 1 | 0917 123 4567 |
| Lola Remedios Santos | Principal Sponsor | 3 | Messenger |
| Anna Reyes | Entourage | 0 | anna@email.com |

- **Name** is how the invitation is addressed. The RSVP card greets them with it.
- **Role** is picked from a dropdown: Principal Sponsor, Secondary Sponsor, Entourage, Family, or Guest. You can also type your own. Everyone except plain guests sees their role under their name on the RSVP card. It also lets you filter your headcount by group.
- **Additional guests** is how many +1s they may bring: 0, 1, 2… Their card says "We have reserved N seats", where N is 1 plus this number. Guests can then choose fewer, or ask for up to 2 more.
- Then click **RSVP → Create missing codes & links**. The **Code** and **Link** columns fill in by themselves. Run it again whenever you add more rows; existing links never change.
- You can paste rows from your Excel guest list. Keep the columns in this order and leave Code and Link blank.

## Sending links

Copy each person's **Link** and send it however you like: Messenger, Viber, SMS, or printed as a QR code on the invitation. Tick **Sent?** as you go.

## Reading replies

Replies fill the last four columns of the same row within seconds:

- **Response**: Accepts or Declines
- **Total attending**: how many are coming, which can be fewer than reserved
- **Extra seats requested**: filled only when they asked for more than you reserved. They're told you'll get back to them. If you say yes, raise their **Additional guests** number.
- **Guest names**: the name of everyone coming
- **Notes**: anything they wrote in the optional notes box: dietary needs, questions, or requests such as "can I bring one more?" Skim this column for anything that needs a reply.
- **Replied on**: when they replied

Rows with an empty **Response** haven't answered yet. Filter or sort that column to see who needs a nudge. If someone replies again, their row updates, and the **Log** tab keeps every submission so nothing is lost.

For your headcount, type `=SUM(` in any empty cell, click the letter above the **Total attending** column, type `)` and press Enter.

## Good to know

- **Don't rename the tabs or the column headers.** The script finds columns by their header, so you can move columns around or add your own anywhere.
- **Updating the script:** after pasting a new version of `Code.gs`, run **RSVP → Set up tabs** once. It adds any new columns at the end and never moves what you've filled in.
- **If you edit `Code.gs` later**, go to Deploy → **Manage deployments** → ✏️ → Version: **New version** → Deploy. The URL stays the same.
- **Links are private-ish.** Anyone holding a link can see that party's name and reply for them, so send each link only to that person. Codes are random, so they can't be guessed.
