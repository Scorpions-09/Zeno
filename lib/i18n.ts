type Language = 'en' | 'zh'

type Translations = {
  [key in Language]: {
    nav: {
      home: string
      news: string
      admissions: string
      about: string
      applyNow: string
    }
    hero: {
      title: string
      subtitle: string
      description: string
      applyNow: string
      learnMore: string
    }
    mission: {
      title: string
      description: string
    }
    values: {
      title: string
      excellence: {
        title: string
        description: string
      }
      integrity: {
        title: string
        description: string
      }
      innovation: {
        title: string
        description: string
      }
    }
    news: {
      title: string
      description: string
      readMore: string
      viewAll: string
    }
    cta: {
      title: string
      description: string
    }
  }
}

export const translations: Translations = {
  en: {
    nav: {
      home: 'Home',
      news: 'Stories',
      admissions: 'Admissions',
      about: 'Our School',
      applyNow: 'Book a Tour'
    },
    hero: {
      title: 'A joyful K12 school where children grow with confidence',
      subtitle: 'Learning with purpose, care, and curiosity every day',
      description: 'Zeno School blends strong academics, student wellbeing, bilingual communication, and vibrant co-curricular life to help every learner thrive from early years through middle school.',
      applyNow: 'Book a Tour',
      learnMore: 'Explore Our School'
    },
    mission: {
      title: 'What we believe',
      description: 'Children do their best when they feel safe, known, challenged, and inspired. Our school is designed to nurture character, literacy, numeracy, creativity, and a lifelong love of learning.'
    },
    values: {
      title: 'Our Core Values',
      excellence: {
        title: 'Whole-Child Growth',
        description: 'We care about academic progress, emotional wellbeing, character, and confidence, not just test scores.'
      },
      integrity: {
        title: 'Warm Structure',
        description: 'Clear routines, high expectations, and caring relationships help children feel secure and ready to learn.'
      },
      innovation: {
        title: 'Future-Ready Learning',
        description: 'Through inquiry, STEAM, language, arts, and collaboration, students build the habits they need for a changing world.'
      }
    },
    news: {
      title: 'School Stories',
      description: 'See how learning comes to life through classroom moments, family events, wellbeing programs, and student achievements.',
      readMore: 'Read Story',
      viewAll: 'View All Stories'
    },
    cta: {
      title: 'Come see the school in action',
      description: 'Meet our team, visit classrooms, and discover whether Zeno School is the right fit for your child and family.'
    }
  },
  zh: {
    nav: {
      home: '首页',
      news: '校园动态',
      admissions: '招生入学',
      about: '学校介绍',
      applyNow: '预约访校'
    },
    hero: {
      title: '一所让孩子自信成长的 K12 学校',
      subtitle: '以关怀、探究与目标感陪伴每一天学习',
      description: 'Zeno School 融合扎实学术、学生关怀、双语沟通与丰富课程活动，帮助孩子从幼小阶段到初中阶段持续成长。',
      applyNow: '预约访校',
      learnMore: '了解学校'
    },
    mission: {
      title: '我们的教育主张',
      description: '当孩子感到安全、被看见、被鼓励、也被适度挑战时，他们才能发挥最好状态。我们关注品格、学术、创造力与终身学习能力的共同发展。'
    },
    values: {
      title: '核心价值',
      excellence: {
        title: '全人发展',
        description: '我们重视学业进步，也同样重视情绪健康、品格养成与自信建立。'
      },
      integrity: {
        title: '温暖而有边界',
        description: '清晰规则、稳定秩序和真诚关系，让孩子更安心，也更能投入学习。'
      },
      innovation: {
        title: '面向未来的学习',
        description: '通过探究式学习、STEAM、语言、艺术与协作，培养孩子适应未来世界的能力。'
      }
    },
    news: {
      title: '校园故事',
      description: '从课堂瞬间、家校活动到学生成长与项目学习，了解校园每天真实发生的精彩。',
      readMore: '阅读全文',
      viewAll: '查看全部动态'
    },
    cta: {
      title: '欢迎来校园看看',
      description: '与老师交流，走进课堂，亲自感受 Zeno School 是否适合您的孩子与家庭。'
    }
  }
}
