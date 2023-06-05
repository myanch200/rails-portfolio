// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "trix"
import "@rails/actiontext"
import "swiper";


import * as ActiveStorage from "@rails/activestorage"
ActiveStorage.start()

import "./app/direct_uploads"


import "./app/project_card_swiper"
