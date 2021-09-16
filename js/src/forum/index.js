import app from 'flarum/forum/app';
import {extend} from "flarum/common/extend";
import DiscussionHero from "flarum/forum/components/DiscussionHero";
import tagsLabel from 'flarum/tags/helpers/tagsLabel';

app.initializers.add('justoverclock/discussion-hero-showtags', () => {
  extend(DiscussionHero.prototype, 'items', function (items) {
    items.add('allTags',
      m('div', {
          className: "heroTagsExt"
        },
        tagsLabel(app.store.all('tags'), {
          link: true,
          className: "tagExt"
        })
      )
    );
  })
});
