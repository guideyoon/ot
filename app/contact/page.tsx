'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 여기에 실제 폼 제출 로직 추가
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', contact: '', message: '' })
    }, 3000)
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light mb-4">문의</h1>
        <p className="text-gray-600 mb-12">
          궁금한 사항이 있으시면 언제든지 연락주세요.
        </p>

        {submitted ? (
          <div className="bg-gray-50 border border-gray-200 p-8 text-center">
            <p className="text-gray-900 font-medium mb-2">
              문의가 접수되었습니다.
            </p>
            <p className="text-gray-600 text-sm">
              빠른 시일 내에 답변드리겠습니다.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                이름
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                placeholder="이름을 입력해주세요"
              />
            </div>

            <div>
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                연락처
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                placeholder="연락처를 입력해주세요"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                문의 내용
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={8}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors resize-none"
                placeholder="문의 내용을 입력해주세요"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-4 px-8 font-medium hover:bg-gray-900 transition-colors"
            >
              문의하기
            </button>
          </form>
        )}

        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="space-y-4 text-gray-600">
            <div>
              <p className="font-medium text-gray-900 mb-1">이메일</p>
              <p>contact@fashionstore.com</p>
            </div>
            <div>
              <p className="font-medium text-gray-900 mb-1">운영시간</p>
              <p>평일 10:00 - 19:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


