import { ProjectList } from './ProjectList';
import { Project } from './Project';
import { Feature } from './Feature';
import { Note } from './Note';
import { Phase, Type } from './Phase';
import { Version } from './Version';

export class Store {
  public projectList: ProjectList;

  constructor() {
    this.projectList = new ProjectList({
      projects: [
        new Project({
          name: 'project1',
          features: [
            new Feature({
              name: 'feature1_1',
              versions: [
                new Version({
                  name: 'version1_1_1',
                  phases: [
                    new Phase({
                      type: Type.Wants,
                      notes: [
                        new Note({
                          text: 'note1_1_1_1',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
}

export { ProjectList, Project, Feature, Note, Phase, Version };
