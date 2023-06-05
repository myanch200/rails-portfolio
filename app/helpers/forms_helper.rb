module FormsHelper
  def label_classes
    'block text-gray-700 text-sm font-bold mb-2'
  end

  def input_classes
    'block border-4 border-black w-full p-2 mb-6'
  end

  def render_form_field(f, field_name)
    render partial: "application/forms/fields/#{field_name}", locals: { f: f }
  end
end