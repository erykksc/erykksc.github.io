export type { Language, HeroAction } from './hero';
export { languages, heroContent, heroActions } from './hero';

export type { SocialLink } from './social';
export { profileName, socialLinks } from './social';

export type { TerminalSection } from './terminal';
export {
  terminalAnimation,
  terminalSections,
  defaultSection,
  getTerminalSection,
} from './terminal';

export type { GithubProject, ProjectPreview } from './projects';
export {
  githubHighlights,
  allGithubProjects,
  projectPreviews,
} from './projects';

export type {
  TimelineItemCategory,
  TimelineButtonColor,
  TimelineButton,
  TimelineItem,
} from './timeline';
export { timelineItems } from './timeline';
