export interface NewsletterAttachmentProps {
  value?: string | number | readonly string[]
  type?: string
  error: string
  setValue: (value: string) => void
  isMessageSent?: boolean
  setIsMessageSent?: (isMessageSent: boolean) => void
}
