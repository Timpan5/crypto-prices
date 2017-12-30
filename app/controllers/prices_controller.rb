# frozen_string_literal: true

class PricesController < ApplicationController
  layout "prices"

  def index
    @prices_props = { name: "Stranger" }
  end
end
