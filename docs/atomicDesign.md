# Atomic Design for UI Components

Polaris has Atomic Design structure for its UI components.

Atomic Design is inspired by chemistry. Just as all matter is made out of atoms that combine to form molecules, which in turn make up more complex organisms. Atomic Design involves breaking an application down into its basic components and then working up from there to create an application layout.

With Atomic Design, you use predefined atoms to create the more complex components and it is easy to see which components are being used for different parts of the application. This reduces the likelihood of writing duplicate code.

There are **5 distinct levels** in atomic design:

#### 1. Atoms

Basic building blocks. Applied to interfaces, atoms are simplest HTML tags, such as a form Label, an Input, Checkbox or a Button.

#### 2. Molecules

Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound. These molecules take on their own properties and serve as the backbone of application design. Form label, Input or Button aren’t too useful by themselves, but combine them together as a form and now they can actually do something together.

**Atoms** and **molecules** should not usually include business logic such as links and event handlers. They are declarative and lifeless scaffolding with no business logic. They are brought to life inside organisms.

#### 3. Organisms

Molecules are building blocks to work with, and we can now combine them together to form organisms. Organisms are groups of molecules joined together to form a relatively complex, distinct section of an application interface. Building up from molecules to organisms encourages creating standalone, portable, reusable components.

#### 4. Templates

Templates consist mostly of groups of organisms stitched together to form reusable layouts.

#### 5. Views

Views are specific instances of content for templates. A placeholder is replaced with real representative content to give an accurate depiction of what a user will ultimately see.

Atomic design provides a clear methodology for crafting design systems. Clients and developers are able to better appreciate the concept of design systems by actually seeing the steps laid out in front of them.

Atomic design allows us to roll out higher quality, more consistent, reusable and understandable components' UI faster.
