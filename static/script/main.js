const { createApp } = Vue;

const sections = [
  {
    key: 'directives',
    label: 'Directives',
    title: 'Vue directives',
    summary: 'These are the most common template helpers you will use every day when building a Vue page.'
  },
  {
    key: 'setup',
    label: 'Setup',
    title: 'How to start Vue',
    summary: 'You can begin with the CDN version for practice, or use a build tool like Vite for a real project.'
  },
  {
    key: 'examples',
    label: 'Examples',
    title: 'Small Vue examples',
    summary: 'These examples show how the directives look in real template code.'
  }
];

const notes = [
  {
    name: 'v-if',
    kind: 'Condition',
    section: 'directives',
    definition: 'Shows an element only when a condition is true.',
    example: '<p v-if="isOpen">Open state</p>',
    useCase: 'Use it when an element should appear or disappear based on a condition.'
  },
  {
    name: 'v-else / v-else-if',
    kind: 'Condition',
    section: 'directives',
    definition: 'Adds alternate branches after a v-if check.',
    example: '<p v-if="score > 80">Great</p>\n<p v-else-if="score > 50">Okay</p>\n<p v-else>Try again</p>',
    useCase: 'Use it when you want one of several outcomes to render.'
  },
  {
    name: 'v-for',
    kind: 'Loop',
    section: 'directives',
    definition: 'Repeats a block for each item in a list.',
    example: '<li v-for="note in notes" :key="note.id">{{ note.title }}</li>',
    useCase: 'Use it when you need a repeated list, like tasks, cards, or menu items.'
  },
  {
    name: 'v-bind',
    kind: 'Binding',
    section: 'directives',
    definition: 'Connects an attribute to reactive data.',
    example: '<img v-bind:src="imageUrl" alt="Preview">\n<button :class="buttonClass">Save</button>',
    useCase: 'Use it when an attribute should change from data, not stay fixed.'
  },
  {
    name: 'v-model',
    kind: 'Form',
    section: 'directives',
    definition: 'Creates two-way binding between form inputs and data.',
    example: '<input v-model="searchTerm" type="text">',
    useCase: 'Use it for forms, search boxes, checkboxes, and other user inputs.'
  },
  {
    name: 'v-on / @click',
    kind: 'Event',
    section: 'directives',
    definition: 'Listens for user events and runs code when they happen.',
    example: '<button @click="count++">Add</button>',
    useCase: 'Use it when a user action should trigger an update or method.'
  }
];

createApp({
  data() {
    return {
      activeSection: 'directives',
      searchTerm: '',
      count: 0,
      sections,
      notes
    };
  },
  computed: {
    currentSection() {
      return this.sections.find((section) => section.key === this.activeSection) ?? this.sections[0];
    },
    filteredNotes() {
      const query = this.searchTerm.trim().toLowerCase();

      return this.notes.filter((note) => {
        const matchesSection = note.section === this.activeSection || this.activeSection === 'examples';

        if (!matchesSection) {
          return false;
        }

        if (!query) {
          return true;
        }

        return [note.name, note.kind, note.definition, note.example, note.useCase]
          .join(' ')
          .toLowerCase()
          .includes(query);
      });
    }
  }
}).mount('#app');