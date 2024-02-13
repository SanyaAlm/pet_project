from rest_framework import serializers

from accounts.models import CustomUser


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'last_name', 'first_name', 'location', 'site_url']
