**Example responsive react/typescript/redux application**

After following the setup instructions below, run the command:
```bash
yarn storybook:watch
```

Then view the story for Responsive App.
This shows the entire application.  The other stories demonstrate subcomponents of the responsive app.

Redux is implemented on a set of data that is hard coded into reducers.  No persistent backend has been
implemented yet.  

*Features*
- Shared third-party dependencies installed once at the project root proliferate
  to all components in the monorepo.  Individual components only install 
  dependencies unique to themselves.
- React components published and versioned separately to an NPM repository
- Components written in Typescript and Material UI.
- Component source can be debugged and hot-loaded in external projects.
- Yarn Workspaces.
- Lerna.
- Vite.
- Common storybook across all components.
- Generate new components using Hygen (EJS) templates. 

*Getting Started*

**Prerequisites**

This project requires [Lerna](https://lerna.js.org/) to be installed up front.  There are a few optional libraries as well.

```bash
npm install --global lerna
```

For code generation install [Hygen](https://www.hygen.io/docs/quick-start):
```bash
npm intall --global hygen
```

And for linking the component library to other projects (like Vision or Ultron), install [yalc](https://github.com/wclr/yalc):
```bash
npm intall --global yalc
```

```bash
yarn install
```  

- Execute the bootstrap target, which invokes _lerna bootstrap_, which installs all component dependencies and resolves
all inter-component cross-dependencies (components that depend upon other components in within the same shared component
  library--read more about how that works [here](https://github.com/lerna/lerna/tree/main/commands/bootstrap))
  
```bash
yarn bootstrap
```

- Verify installation by running both the storybook and unit tests:

**Storybook** 

This should bring up the storybook for this project in a browser.  There is a single sample widget that should 
  successfully render:
  
```bash
yarn storybook
```

*Publishing to NPM*

Included with this project is a docker container called [Verdaccio](https://verdaccio.org/).  It isn't necessary to
have this when this project is being actively developed and published to a public or corporate NPM repository. When 
practicing the process of publishing widgets, the Verdaccio docker instance can be spun up locally.  You can 
publish over and over again in a private repository, which can be subsequently recycled or thrown away completely.

The docker container can be started by doing the following:

- From the folder .docker/verdaccio, execute:
```bash
docker-compose up -d
```

If you want to see the logs:
```bash
docker-compose logs --follow
```

In a browser, bring up localhost:4873.  You will see the locally hosted Verdaccio NPM homepage with instructions
on getting started.  Here is what you will need to do from a command line (substitute with your username, password 
and email):

```bash
npm adduser --registry http://localhost:4873/
Username: your_user_name
Password: 
Email: (this IS public) your_user_name@domain.com
Logged in as your_user_name on http://localhost:4873/.
```

Rename or copy the file _.npmrc-verdaccio_ to _.npmrc_ in the root of your project, which has this content:
```text
registry=http://localhost:4873
@sellis:registry=http://localhost:4873
```

Now publish to all widgets (there is only one by default) to Verdaccio:

```bash
sellis@ZCJC02FVADDQ05N lerna-monorepo % yarn publish-all
```

Out of the box there are issues the first time publishing widgets.  The first attempt causes the widget versions 
to be updated in their respective package.json files, after which widgets can be published without issue. 

*Development*

While developing a new widget or contributing to an existing widget, the storybook can be started (yarn storybook).  
Any change made to source code gets applied immediately, provided the _storybook:watch_ target is running:

```bash
yarn storybook:watch
```

When developing a shared component while viewing it in another project, run the dev:watch target:

```bash
yarn dev:watch
```

The dev:watch target runs parallel processes to continuously
- build any package component that whose source code has been modified
- push modified components via yalc, making all shared library components available to outside projects

You can navigate to <user_root>/.yalc and see where yalc stores the shared component code:

```text
└─ packages
└── @sellis
├──── app-root
│     └─ 1.0.2
│        └─ ...
├──── application-state
│     └─ 1.0.2
│        └─ ...
├──── coming-soon
│     └─ 1.0.2
│        └─ ...
```

In <app_root>/webapp, type:

```bash
yalc link @sellis/coming-soon
```

If this is the first time yalc has been used to link a component, you will see a new folder .yalc appear in the 
webapp folder that looks something like this:

```text
└─ @sellis
├─── coming-soon
│    └─ ...
```

Any change made to the sample component will be applied immediately.  

The source code of the shared component is available for debugging in the developer console of your favorite browser.

*Topics to cover going forward*

- Code generation using Hygen
  * Using existing templates to create new widgets quickly
  * Creating custom templates  









