import React from 'react'

interface Props {
  title: string,
  icon: Icon,
  content: string,
}

const ContactLinkItem: React.FC<Props> = ({
  title,
  icon,
  content
}) => {
  return (
              <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-sm transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:admin@steadfasthaven.com"
                      className="text-blue-600 hover:text-blue-700 text-sm transition-colors"
                    >
                      admin@steadfasthaven.com
                    </a>
                  </div>
                </div>
              </div>
  )
}

export default ContactLinkItem
