"use server"
import { Resend } from 'resend';

export async function submitMail(
  initialState:unknown,
  formData: FormData,
): Promise<{ success: boolean; message: string }> {

  const resend = new Resend(process.env.RESEND_API_KEY)
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  if (!email || !message) {
    return { success: false, message: "Email and message cannot be empty." }
  }

  try {
    const emailHtml = `
      <div style="font-family: sans-serif; line-height: 1.6;">
        <h1 style="color: #E11D48;">New Message from Portfolio Visitor!</h1>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="border-left: 4px solid #E11D48; padding-left: 10px; font-style: italic;">${message}</p>
        <p>This message was sent from your portfolio contact form.</p>
      </div>
    `

    const { error } = await resend.emails.send({
      from: "Portfolio <portfolio@sahilkhan.site>",
      to: ["sahilkh9087@gmail.com"],
      subject: "Got a mail by a visitor on your portfolio",
      html: emailHtml,
    })

    if (error) {
      console.error("Resend error:", error)
      return { success: false, message: error.message || "Failed to send message." }
    }

    return { success: true, message: "Message sent successfully!" }
  } catch (error) {
    console.error("Submission error:", error)
    return { success: false, message: "An unexpected error occurred." }
  }
}