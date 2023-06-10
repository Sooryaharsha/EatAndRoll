from django.core.exceptions import ValidationError
import os


def allow_only_images_validator(value):
    ext = os.path.splitext(value.name)[1]  # cover_image.jpg
    print(ext)
    valid_extenstions = [".png", ".jpg", ".jpeg"]
    if not ext.lower() in valid_extenstions:
        raise ValidationError(
            "Unsupported extension, Allowed extentions : " + str(valid_extenstions)
        )
