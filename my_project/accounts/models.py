import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4,editable=False)
    site_url = models.URLField(null=True, blank=True, verbose_name='URL site')
    location = models.CharField(null=True, blank=True, max_length=300, verbose_name='Location')
